// src/components/LoginLink.js


function LoginLink({ href, text }) {
  return (
    <a className="login-link" href={href}>
      {text}
    </a>
  );
}

export default LoginLink;
