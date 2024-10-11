import "react";

const url = import.meta.env.VITE_ENDPOINT_URL || "http://aws-day-1-dennisosmani-api-env-1.eba-xk2mds4f.eu-north-1.elasticbeanstalk.com/";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
