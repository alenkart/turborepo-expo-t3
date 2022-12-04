import { Button } from "ui";

import styles from "../styles/index.module.css";
import { trpc } from "../utils/trpc";

function Web() {
  const { status, refetch } = trpc.all.useQuery();

  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => refetch()} text={status} />
    </div>
  );
}

export default Web;
