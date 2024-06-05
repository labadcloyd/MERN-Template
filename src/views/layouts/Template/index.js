"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

function Template(props) {
  const { items } = props;

  const router = useRouter();
  const { data: session } = useSession();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (items) setData(items);
  }, [items]);

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <h3>{item?.title}</h3>
          <h6>{item?.title}</h6>
        </div>
      ))}
    </div>
  );
}
export default Template;
