import React from "react";

type JsonLdProps = {
	// Structured data object to inject as application/ld+json
	json: Record<string, unknown>;
	// Optional: set a stable id to avoid duplicate injections
	id?: string;
};

const JsonLd: React.FC<JsonLdProps> = ({ json, id }) => {
	return (
		<script
			type="application/ld+json"
			id={id}
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(json),
			}}
		/>
	);
};

export default JsonLd;


