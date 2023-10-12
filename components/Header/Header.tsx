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
            href="https://github.com/rubyforgood/happycommits/issues/new?assignees=&labels=💪+New+Project&projects=&template=suggest_project.yml&title=%5BNew+Project%5D%3A+%3Ctitle%3E"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit<span className={styles.hideSm}> a project</span>
          </Button>
        </div>
      </header>
    </>
  );
};
