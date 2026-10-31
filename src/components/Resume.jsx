import { useEffect, useRef } from "react";

export default function Resume() {
  const resumePath = `${process.env.PUBLIC_URL}/resume/DanielCordobaPaez_Resume.pdf`;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      window.location.replace(resumePath);
    }
  }, [ref, resumePath]);

  return (
    <a hidden={true} href={resumePath} ref={ref}>
      Redirect
    </a>
  );
}
