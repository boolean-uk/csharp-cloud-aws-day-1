import "react";

const url =
  import.meta.env.VITE_ENDPOINT_URL ||
  "http://i-base-env.eba-aecqjfqd.eu-north-1.elasticbeanstalk.com/";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
