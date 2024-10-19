import "./ExternalLink.css";

function ExternalLink({ url, imageSrc, altText }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="external-link"
    >
      <img src={imageSrc} alt={altText} className="external-link-image" />
    </a>
  );
}

export default ExternalLink;
