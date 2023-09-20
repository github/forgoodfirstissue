import Image from "next/image";

export const GitHubIcon = () => {

  return (
    <div style={{position: 'relative', paddingLeft: '7.5%', paddingTop: '3%'}}>
        <Image src="/github.svg" alt="First Issue" width={64} height={62.42} />
    </div>
    );
};
