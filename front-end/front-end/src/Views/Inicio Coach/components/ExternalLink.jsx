import "./ExternalLink.css";

function ExternalLink({ url, imageSrc, altText }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-externo"
    >
      <img src={imageSrc} alt={altText} className="link-externo-img" />
    </a>
  );
}

export default ExternalLink;
