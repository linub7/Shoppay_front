const SocialItem = ({ children, path }) => {
  return (
    <li>
      <a href={path} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  );
};

export default SocialItem;
