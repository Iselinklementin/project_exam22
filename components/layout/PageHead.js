import Head from "next/head";
import PropTypes from "prop-types";

export default function PageHead({ title = "", content, keywords }) {
  return (
    <Head>
      <title>
        {title}
        {title ? " | " : ""}Holidaze
      </title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#FC5156" />
    </Head>
  );
}

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};
