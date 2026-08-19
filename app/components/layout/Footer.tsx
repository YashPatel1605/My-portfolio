import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p>(c) 2026 Yash Patel. All rights reserved.</p>
        <a href="#home" className="back-top" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
