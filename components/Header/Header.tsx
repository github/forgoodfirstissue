import styles from "./Header.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '@primer/react-brand';

export const Header = () => {
  return (
    <>
      <header className={styles.siteHeader} data-color-mode="dark">
        <div>
          <Link href="/">
            <Image
              src="/for-good-first-issue.svg"
              width={144}
              height={32}
              alt="For Good First Issue logo"
            />
          </Link>
          <Button
            variant="primary"
            as="a"
            href="https://github.com/rubyforgood/happycommits"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute<span className={styles.hideSm}> to a project</span>
          </Button>
        </div>
      </header>
    </>
  );
};
