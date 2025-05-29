import { ModuleFields, TextField, SimpleMenuField } from "@hubspot/cms-components/fields";

export const meta = {
    label: 'Featured Articles',
    description: 'Displays a list of articles from HubDB',
  };

export const fields = 
<ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Our Articles"
    />
     <SimpleMenuField
    name="simple_menu"
    label="Simple menu"
    required={false}
    default={[
      {
        isPublished: false,
        pageLinkId: null,
        pageLinkName: null,
        isDeleted: null,
        categoryId: null,
        subCategory: null,
        contentType: null,
        state: null,
        linkLabel: 'Why is product marketing important?',
        linkUrl: null,
        linkParams: null,
        linkTarget: null,
        type: 'NO_LINK',
        children: [
          {
            isPublished: false,
            pageLinkId: null,
            pageLinkName: null,
            isDeleted: null,
            categoryId: null,
            subCategory: null,
            contentType: null,
            state: null,
            linkLabel: 'Product Marketing Responsibilities',
            linkUrl: 'https://www.google.com',
            linkParams: null,
            linkTarget: null,
            type: 'URL_LINK',
            children: [],
          },
          {
            isPublished: false,
            pageLinkId: null,
            pageLinkName: null,
            isDeleted: null,
            categoryId: null,
            subCategory: null,
            contentType: null,
            state: null,
            linkLabel:
              '1. Identify the buyer personas and target audience for your product.',
            linkUrl: '#step1',
            linkParams: null,
            linkTarget: null,
            type: 'URL_LINK',
            children: [],
          },
          {
            isPublished: false,
            pageLinkId: null,
            pageLinkName: null,
            isDeleted: null,
            categoryId: null,
            subCategory: null,
            contentType: null,
            state: null,
            linkLabel:
              '2. Successfully create, manage and carry out your product marketing strategy.',
            linkUrl: '#step2',
            linkParams: null,
            linkTarget: null,
            type: 'URL_LINK',
            children: [],
          },
        ],
      },
      {
        isPublished: false,
        pageLinkId: null,
        pageLinkName: null,
        isDeleted: null,
        categoryId: null,
        subCategory: null,
        contentType: null,
        state: null,
        linkLabel: 'How HubSpot can help', //main heading for the simple menu. links wont work here
        linkUrl: 'https://www.hubspot.com',
        linkParams: null,
        linkTarget: null,
        type: 'URL_LINK',
        children: [],
      },
    ]}
  />
  
</ModuleFields>

export const Component = ({ heading, simple_menu }) => {
    return (
      <section className="featured-articles">
        <h2>{heading}</h2>
        <div>
            {simple_menu && simple_menu.map((item, index) => (
                <div key={index}>
                    <h3>{item.linkLabel}</h3>
                    {item.children && item.children.length > 0 && (
                        <ul>
                            {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                    <a href={child.linkUrl}>{child.linkLabel}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
      </section>
    );
  }
  