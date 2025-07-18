import SanityImage from "@/utils/sanity";

const SanitySerializers = {
  types: {
    // Code blocks with syntax highlighting
    code: (props) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
        <code className="text-sm font-mono">{props.node.code}</code>
      </pre>
    ),
    // Images with proper styling
    image: (props) => (
      <figure className="my-6">
        <SanityImage
          src={props.node}
          alt={props.node.alt || ""}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg shadow-md"
        />
        {props.node.caption && (
          <figcaption className="text-sm text-gray-600 text-center mt-2">
            {props.node.caption}
          </figcaption>
        )}
      </figure>
    ),
    // Custom block types
    block: (props) => {
      const { style = "normal" } = props.node;

      // Headings
      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        const headingClasses = {
          h1: "text-3xl font-bold text-gray-900 mt-8 mb-4",
          h2: "text-2xl font-bold text-gray-900 mt-6 mb-3",
          h3: "text-xl font-bold text-gray-900 mt-5 mb-2",
          h4: "text-lg font-bold text-gray-900 mt-4 mb-2",
        };

        const className =
          headingClasses[`h${level}` as keyof typeof headingClasses] ||
          "text-lg font-bold";

        if (level === "1")
          return <h1 className={className}>{props.children}</h1>;
        if (level === "2")
          return <h2 className={className}>{props.children}</h2>;
        if (level === "3")
          return <h3 className={className}>{props.children}</h3>;
        if (level === "4")
          return <h4 className={className}>{props.children}</h4>;
        return <h5 className={className}>{props.children}</h5>;
      }

      // Normal paragraphs
      if (style === "normal") {
        return (
          <p className="text-gray-700 leading-relaxed mb-4">{props.children}</p>
        );
      }

      // Blockquotes
      if (style === "blockquote") {
        return (
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 rounded-r-lg">
            <p className="text-gray-700 italic">{props.children}</p>
          </blockquote>
        );
      }

      // Default fallback
      return (
        <p className="text-gray-700 leading-relaxed mb-4">{props.children}</p>
      );
    },
  },
  marks: {
    // Bold text
    strong: (props) => (
      <strong className="font-bold text-gray-900">{props.children}</strong>
    ),
    // Italic text
    em: (props) => <em className="italic text-gray-800">{props.children}</em>,
    // Code inline
    code: (props) => (
      <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {props.children}
      </code>
    ),
    // Links
    link: (props) => (
      <a
        href={props.mark.href}
        className="text-blue-600 hover:text-blue-800 underline transition-colors"
        target={props.mark.blank ? "_blank" : undefined}
        rel={props.mark.blank ? "noopener noreferrer" : undefined}
      >
        {props.children}
      </a>
    ),
    // Strikethrough
    strikethrough: (props) => (
      <span className="line-through text-gray-500">{props.children}</span>
    ),
  },
  list: {
    // Bullet lists
    bullet: (props) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {props.children}
      </ul>
    ),
    // Numbered lists
    number: (props) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {props.children}
      </ol>
    ),
  },
  listItem: {
    // List items
    bullet: (props) => (
      <li className="text-gray-700 leading-relaxed">{props.children}</li>
    ),
    number: (props) => (
      <li className="text-gray-700 leading-relaxed">{props.children}</li>
    ),
  },
  // Container for the entire content
  container: (props) => (
    <div className="prose prose-lg max-w-none">{props.children}</div>
  ),
};

export default SanitySerializers;
