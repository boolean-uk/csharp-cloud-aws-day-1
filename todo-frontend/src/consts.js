import "react";

const url = import.meta.env.VITE_ENDPOINT_URL || "http://aws-day1-flier-env.eba-ytciqmg8.eu-north-1.elasticbeanstalk.com/";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
