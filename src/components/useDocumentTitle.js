/* eslint-disable react-hooks/exhaustive-deps */
// useDocumentTitle.js
import { useEffect } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  // const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title =
      "Escrow app for secure & safe P2P transfer of crypto & fiat.";
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title =
          "Escrow app for secure & safe P2P transfer of crypto & fiat.";
      }
    },
    []
  );
}

export default useDocumentTitle;
