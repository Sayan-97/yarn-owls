"use client";

import { motion } from "motion/react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#141414] overflow-hidden"
    >
      <style>{`
        .loader-glow-bg {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(27, 154, 91, 0.18) 0%,
            rgba(27, 154, 91, 0.06) 50%,
            transparent 75%
          );
          animation: glow-pulse 2.4s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        .loader-orbit-ring {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1.5px solid rgba(27, 154, 91, 0.25);
          animation: spin 3.5s linear infinite;
        }

        .loader-orbit-ring::after {
          content: "";
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #1b9a5b;
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 12px rgba(27, 154, 91, 0.9);
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .loader-logo-wrap {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: logo-bounce 2.4s ease-in-out infinite;
        }

        @keyframes logo-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .loader-logo-wrap svg {
          width: 56px;
          height: 60px;
          animation: logo-breathe 2.4s ease-in-out infinite;
        }

        @keyframes logo-breathe {
          0%,
          100% {
            filter: drop-shadow(0 0 12px rgba(27, 154, 91, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 28px rgba(27, 154, 91, 0.95));
          }
        }

        .loader-eye-left,
        .loader-eye-right {
          animation: blink 3s ease-in-out infinite;
          transform-origin: center;
        }
        .loader-eye-right {
          animation-delay: 0.08s;
        }

        @keyframes blink {
          0%,
          90%,
          100% {
            transform: scaleY(1);
          }
          93%,
          97% {
            transform: scaleY(0.1);
          }
        }

        .loader-bar-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .loader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #0f5c35, #1b9a5b, #56d49a, #1b9a5b);
          background-size: 200% 100%;
          animation: load-bar 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite,
            shimmer 1.8s linear infinite;
        }

        @keyframes load-bar {
          0% {
            width: 0%;
            margin-left: 0;
          }
          50% {
            width: 70%;
            margin-left: 15%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        .loader-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #1b9a5b;
          opacity: 0;
          animation: loader-float-up var(--dur, 4s) ease-in infinite;
          animation-delay: var(--delay, 0s);
        }

        @keyframes loader-float-up {
          0% {
            opacity: 0;
            transform: translateY(0) scale(1);
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateY(-120px) scale(0.4);
          }
        }
      `}</style>

      <div
        className="loader-particle"
        style={
          {
            left: "44%",
            "--dur": "5s",
            "--delay": "0s",
            bottom: "46%",
          } as React.CSSProperties
        }
      />
      <div
        className="loader-particle"
        style={
          {
            left: "52%",
            "--dur": "4.2s",
            "--delay": "0.6s",
            bottom: "44%",
          } as React.CSSProperties
        }
      />
      <div
        className="loader-particle"
        style={
          {
            left: "48%",
            "--dur": "6s",
            "--delay": "1.2s",
            bottom: "43%",
          } as React.CSSProperties
        }
      />
      <div
        className="loader-particle"
        style={
          {
            left: "56%",
            "--dur": "4.8s",
            "--delay": "1.8s",
            bottom: "45%",
          } as React.CSSProperties
        }
      />
      <div
        className="loader-particle"
        style={
          {
            left: "40%",
            "--dur": "5.4s",
            "--delay": "2.4s",
            bottom: "47%",
          } as React.CSSProperties
        }
      />

      <div className="loader-glow-bg" />
      <div className="loader-orbit-ring" />

      <div className="loader-logo-wrap">
        <svg
          viewBox="0 0 39 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="loader-logo-title"
        >
          <title id="loader-logo-title">Yarn Owls Logo</title>
          <path
            d="M0.752875 19.8516C0.914139 19.9119 2.20837 20.7814 2.48221 20.9448C4.29591 22.0267 6.15618 22.8497 8.20655 23.3743C10.3346 23.9187 12.665 24.0325 14.798 23.4516C15.671 23.2059 16.4896 22.8068 17.3226 22.4642C20.1753 21.2911 22.7558 21.5299 25.1855 23.5357C27.1991 25.198 28.8418 27.1531 30.4731 29.1876C31.8639 30.9271 33.2263 32.689 34.5598 34.4728L36.8037 37.4356C37.0904 37.8167 37.5487 38.3708 37.7894 38.7544C38.1829 39.2242 38.2626 39.4666 38.7384 39.9129C37.4424 39.9793 35.6084 39.9235 34.2853 39.9231L25.5832 39.9227H16.4065C14.9056 39.9227 13.1815 39.9504 11.702 39.914C10.2237 39.8776 7.95756 37.9902 6.98582 36.9115C3.76898 33.3403 2.16893 28.3969 1.27404 23.7554C1.09073 22.8046 0.706494 20.7968 0.752875 19.8516Z"
            fill="#1B9A5B"
          />
          <path
            d="M27.6218 0.142689L27.6878 0.158848C27.7446 0.229868 27.7367 0.296919 27.7366 0.390841C27.7312 2.87344 27.7302 5.35769 27.7305 7.84007C27.7376 8.87158 27.7335 9.90316 27.7182 10.9346C27.713 11.1597 27.7894 11.7992 27.6263 11.9222C27.4692 11.7945 27.3465 11.3809 27.2738 11.1842C26.4398 8.92842 24.1597 7.10196 21.7295 6.9811C20.7363 6.93173 19.7939 6.99673 18.8466 7.33851C17.0114 8.01352 15.5716 9.46978 14.9174 11.3125C14.7963 11.6611 14.7246 12.0374 14.6042 12.3877C14.5024 12.6844 14.5592 13.0572 14.2158 13.1658C14.0842 13.1389 14.0352 13.15 13.9762 12.997C13.821 12.6193 13.7801 12.1991 13.6678 11.8087C12.2842 6.99859 6.71788 5.46113 2.95516 8.56357C2.12832 9.37932 1.44039 10.2365 1.08245 11.359C1.0372 11.5009 0.958181 11.7939 0.834627 11.8784C0.712671 11.7401 0.753382 10.3551 0.752764 10.0808L0.749899 7.11357C0.748696 4.80926 0.714116 2.40811 0.764978 0.110352C1.16367 0.437909 1.66765 0.757955 2.09144 1.06107C3.11625 1.79406 4.16579 2.49757 5.18845 3.23341C5.40019 3.38576 5.63924 3.55781 5.82343 3.74126C7.39938 2.70955 9.17283 2.01715 11.0309 1.70812C11.6179 1.60998 12.5371 1.47303 13.1327 1.44132C16.2718 1.27415 19.9398 1.89557 22.5435 3.74901C23.0922 3.29749 23.8484 2.78622 24.4393 2.37237L26.5559 0.874712C26.9221 0.619169 27.2633 0.419516 27.6218 0.142689Z"
            fill="#1B9A5B"
          />
          <g
            className="loader-eye-right"
            style={{ transformOrigin: "21.4px 13.65px" }}
          >
            <path
              d="M20.135 9.89635C22.21 9.53689 24.1827 10.93 24.5381 13.0057C24.8934 15.0814 23.4965 17.0514 21.4201 17.4026C19.3495 17.7529 17.3861 16.3607 17.0318 14.2908C16.6774 12.2208 18.0658 10.2548 20.135 9.89635Z"
              fill="#1B9A5B"
            />
          </g>
          <g
            className="loader-eye-left"
            style={{ transformOrigin: "7.5px 13.65px" }}
          >
            <path
              d="M7.01168 9.89505C8.36238 9.67118 9.72925 10.1901 10.591 11.2541C11.4527 12.318 11.4527 13.7628 11.177 15.0376C10.6775 16.3123 9.53163 17.2204 8.17649 17.4156C6.11192 17.713 4.19272 16.2929 3.87349 14.2316C3.55422 12.1703 4.95387 10.2362 7.01168 9.89505Z"
              fill="#1B9A5B"
            />
          </g>
        </svg>
      </div>

      <div className="loader-bar-wrap">
        <div className="loader-bar-fill" />
      </div>
    </motion.div>
  );
}
