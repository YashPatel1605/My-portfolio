"use client";

import { useEffect, useMemo, useState } from "react";

const roles = [
  "React Native Developer",
  "Web Application Developer",
  "Web / Mobile Application Developer",
  "Backend Developer",
  "N8n Workflow Automation Designer",
];

export function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentRole = roles[roleIndex];

  const visibleRole = useMemo(() => currentRole.slice(0, letterCount), [currentRole, letterCount]);

  useEffect(() => {
    const doneTyping = !deleting && letterCount === currentRole.length;
    const doneDeleting = deleting && letterCount === 0;
    const delay = doneTyping ? 1300 : deleting ? 34 : 58;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
        return;
      }

      setLetterCount((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentRole.length, deleting, letterCount]);

  return (
    <div className="role typing-role" aria-label={currentRole}>
      <span>{visibleRole}</span>
      <span className="typing-role-caret" aria-hidden="true" />
    </div>
  );
}
