import { email } from "@/assets/data";

interface LegalSectionContent {
  id: string;
  title: string;
  content?: string;
  description?: string;
  listItems?: string[];
  subsections?: {
    title: string;
    content: string;
  }[];
}

interface LegalSectionProps {
  title: string;
  lastUpdated: string;
  sections: LegalSectionContent[];
}

export default function LegalSection({
  title,
  lastUpdated,
  sections,
}: LegalSectionProps) {
  return (
    <div className="bg-white px-4 py-24 pt-36 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {title}
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8 mt-2">Last updated: {lastUpdated}</p>

          {sections.map((section) => (
            <section key={section.id} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-gray-600 mb-2">{section.content}</p>
              )}
              {section.description && (
                <p className="text-gray-600 mb-4">{section.description}</p>
              )}
              {section.listItems && (
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  {section.listItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections && (
                <div className="ml-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {subsection.title}
                      </h3>
                      <p className="text-gray-600">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contacting us
            </h2>
            <p className="text-gray-600">
              If you have any questions about this {title}, please contact us
              at:
              <br />
              <a
                href={`mailto:${email}`}
                className="text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
              >
                {email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
