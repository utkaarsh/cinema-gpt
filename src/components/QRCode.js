import React, { useState, useEffect } from "react";

const QRCodeComponent = () => {
  const [error, setError] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState(null);

  function decrypt(encryptedText) {
    // Extract the base64 part of the data URL
    const base64String = encryptedText.split(",")[1];

    // Decode the sanitized base64 string
    const binaryString = atob(base64String);

    // Convert binary string to UTF-8 string
    let utf8String = "";
    for (let i = 0; i < binaryString.length; i++) {
      utf8String += String.fromCharCode(binaryString.charCodeAt(i));
    }
    console.log("Decrypt", utf8String);

    setQrCodeImage(utf8String);
  }
  useEffect(() => {
    const fetchQrCode = async () => {
      try {
        const response = await fetch("http://localhost:3500/qr-code"); // Replace with your server URL

        if (!response.ok) {
          throw new Error("Failed to fetch QR code");
        }

        const blob = await response.blob(); // Get image data
        const reader = new FileReader();

        reader.onload = () => {
          const dataUrl = reader.result;
          decrypt(dataUrl);
          console.log("Image", dataUrl);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error fetching QR code:", error);
      }
    };

    fetchQrCode();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center m-2 items-center ">
      <img src={qrCodeImage} className="p-6 h-64 w-64 mt-56" alt="QR Code" />
    </div>
  );
};

export default QRCodeComponent;
