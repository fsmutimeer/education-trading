import Head from "next/head";
const Meta = ({title, keywords,description }) => {
  return (
  <Head>
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<meta name="keywords" content={keywords} />
	<meta charSet="utf-8" />
	<link rel="icon" href="/favicon.ico" />
	<title>{title}</title>
  </Head>
  )
};

Meta.defaultProps = {
	title:'feroz s. mutimeer',
	keywords:'developer, software',
	description:'fullstack developer'
}

export default Meta;