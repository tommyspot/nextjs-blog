import Image from 'next/image'

const YourComponent = () => (
  <Image
    src="/images/profile.jpeg" // Route of the image file
    height={444} // Desired size with correct aspect ratio
    width={444} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default YourComponent;