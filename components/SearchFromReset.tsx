"use client";

import React from "react";

const  SearchFromReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      window.location.href = '/';
      form.reset();
    }
  };

  return (
    <button type="button" onClick={reset} className="search-btn text-white">
      X
    </button>
  );
};

export default SearchFromReset;
