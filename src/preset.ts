import { UserAction, Selection, Location } from "src/action";

export const SUMMARY_DOC_ACTION: UserAction = {
	name: "Summarize document",
	prompt: "Summarize the following in a paragraph",
	sel: Selection.ALL,
	loc: Location.INSERT_HEAD,
	format: "**Summary**: {{result}}\n\n",
	modalTitle: "Check summary",
};

export const COMPLETION_ACTION: UserAction = {
	name: "Text Completion",
	prompt: "Complete the following text",
	sel: Selection.CURSOR,
	loc: Location.APPEND_CURRENT,
	format: "{{result}}",
	modalTitle: "Check result",
};

export const REWRITE_ACTION: UserAction = {
	name: "Rewrite selection (formal)",
	prompt: "Rewrite the following text in a professional tone",
	sel: Selection.CURSOR,
	loc: Location.REPLACE_CURRENT,
	format: "{{result}}",
	modalTitle: "Check result",
};

export const HASHTAG_ACTION: UserAction = {
    name: "Generate hashtags",
    prompt: "Generate hashtags for the following text",
    sel: Selection.ALL,
    loc: Location.APPEND_BOTTOM,
    format: "\n{{result}}",
    modalTitle: "Check result",
}

// Default actions
export const DEFAULT_ACTIONS: Array<UserAction> = [
	SUMMARY_DOC_ACTION,
	COMPLETION_ACTION,
	REWRITE_ACTION,
    HASHTAG_ACTION
];
