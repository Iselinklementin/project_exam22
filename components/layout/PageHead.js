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
    </Head>
  );
}

Head.propTypes = {
  title: PropTypes.node,
  content: PropTypes.string,
};
