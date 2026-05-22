export type ExternalLinkAttributes = {
  target?: string;
  rel?: string;
};

export function externalLinkAttributes(href: string): ExternalLinkAttributes {
  if (href.startsWith('mailto')) {
    // guard: returns early if link is same-document mailto (no new tab)
    return {};
  }

  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}
