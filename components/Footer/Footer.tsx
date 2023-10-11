import styles from "./Footer.module.scss";
import {Button, Text} from '@primer/react-brand'

export const Footer = () => {
  return (

    <footer className={styles.footer}>

      <div className="py-5 p-10">
        <div className={styles.footer__container}>
          <div className={styles.github}>
            <a
              href="https://github.com/"
              data-analytics-click="Footer, go to home, text:home"
              className="text-gray-dark"
              aria-label="Go to GitHub homepage"
            >
              <svg
                height="30"
                className="octicon octicon-logo-github"
                viewBox="0 0 45 16"
                version="1.1"
                width="84"
                aria-hidden="true"
                fill="white"
              >
                <path
                  d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"
                ></path>
              </svg>
            </a>

            <div className={styles.subscribeWrap} data-color-mode="dark">
              <Text className={styles.textWhite} as="p" weight="semibold">
                Subscribe to <em>The GitHub Insider</em>
              </Text>
              <Text size="100" as="p">
                Discover tips, technical guides, and best practices in our monthly newsletter for developers.
              </Text>
              <Button
                as="a"
                href="https://resources.github.com/newsletter/"
                hasArrow={false}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className={styles.product}>
            <b>Product</b>
            <ul>
              <li>
                <a href="https://github.com/features">Features</a>
              </li>
              <li>
                <a href="https://github.com/security">Security</a>
              </li>
              <li>
                <a href="https://github.com/enterprise">Enterprise</a>
              </li>
              <li>
                <a href="https://github.com/customer-stories?type=enterprise">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="https://github.com/pricing">Pricing</a>
              </li>
              <li>
                <a href="https://resources.github.com">Resources</a>
              </li>
            </ul>
          </div>
          <div className={styles.platform}>
            <b>Platform</b>
            <ul>
              <li>
                <a href="https://developer.github.com">Developer API</a>
              </li>
              <li>
                <a href="http://partner.github.com/">Partners</a>
              </li>
              <li>
                <a href="https://atom.io">Atom</a>
              </li>
              <li>
                <a href="http://electron.atom.io/">Electron</a>
              </li>
              <li>
                <a href="https://desktop.github.com/">Github Desktop</a>
              </li>
            </ul>
          </div>
          <div className={styles.support}>
            <b>Support</b>
            <ul>
              <li>
                <a href="https://docs.github.com">Docs</a>
              </li>
              <li>
                <a href="https://github.community">Community Forum</a>
              </li>
              <li>
                <a href="https://services.github.com/">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="https://lab.github.com/">Learning Lab</a>
              </li>
              <li>
                <a href="https://githubstatus.com/">Status</a>
              </li>
              <li>
                <a href="https://support.github.com">Contact Github</a>
              </li>
            </ul>
          </div>
          <div className={styles.company}>
            <b>Company</b>
            <ul>
              <li>
                <a href="https://github.com/about">About</a>
              </li>
              <li>
                <a href="https://github.blog">Blog</a>
              </li>
              <li>
                <a href="https://github.com/about/careers">Careers</a>
              </li>
              <li>
                <a href="https://github.com/about/press">Press</a>
              </li>
              <li>
                <a href="https://shop.github.com">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.socials__wrapper}>
        <div className={styles.socials}>
          <ul className={styles.socials__right}>
            <li>
              <a
                href="https://twitter.com/github"
                data-analytics-click="Footer, go to Twitter, text:twitter"
                title="GitHub on Twitter"
                aria-label="GitHub on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="20">
                  <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z" fill="currentColor"></path></svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/GitHub"
                data-analytics-click="Footer, go to Facebook, text:facebook"
                title="GitHub on Facebook"
                aria-label="GitHub on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15.3 15.4"
                  height="18"
                >
                  <path
                    d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/github"
                data-analytics-click="Footer, go to YouTube, text:youtube"
                title="GitHub on YouTube"
                aria-label="GitHub on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.17 13.6"
                  height="16"
                >
                  <path
                    d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/github"
                data-analytics-click="Footer, go to Linkedin, text:linkedin"
                title="GitHub on Linkedin"
                aria-label="GitHub on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 18"
                  height="18"
                >
                  <path
                    d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/github"
                data-analytics-click="Footer, go to github's org, text:github"
                title="GitHub's organization"
                aria-label="GitHub's organization"
              >
                <svg
                  height="20"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="20"
                  aria-hidden="true"
                  fill="gray"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <ul className={styles.socials__left}>
            <li>© 2023 Github, Inc.</li>
            <li>
              <a href="https://docs.github.com/site-policy/github-terms/github-terms-of-service">Terms</a>
            </li>
            <li>
              <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement">Privacy</a>
            </li>
          </ul>
        </div>
      </div>



    </footer>
  );
};
