import React, { useEffect, useState } from "react";

function Github() {
  let [src, setSrc] = useState(null);
  let url = "https://api.github.com/users/kamalpandey27";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setSrc(res.avatar_url))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
}

export default Github;
