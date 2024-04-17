// import "./styles.css";
import { React, useState } from "react";

export default function App() {
	return (
		<div>
			<TextExpander>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</TextExpander>

			<TextExpander
				collapsedNumWords={20}
				expandButtonText="Show text"
				collapseButtonText="Collapse text"
				buttonColor="#ff6622"
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</TextExpander>

			<TextExpander expanded={true} className="box">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</TextExpander>
		</div>
	);
}

function TextExpander({
	collapsedNumWords = 10,
	expandButtonText = "show more",
	collapseButtonText = "show less",
	buttonColor,
	expanded = false,
	className,
	children,
}) {
	const [isExpanded, setIsExpanded] = useState(expanded);
	const displayText = isExpanded
		? children
		: children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
	return (
		<div className={className}>
			<span>{displayText}</span>
			<button
				onClick={() => {
					setIsExpanded((exp) => !exp);
				}}
			>
				{isExpanded ? collapseButtonText : expandButtonText}
			</button>
		</div>
	);
}
