import React from 'react';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic';
import '@builder.io/widgets';
// import MyButton from '@/components/button';
// import MyButton from '@/components/button';


// Replace with your Public API Key
builder.init("65ffa949f1eb4e2691ecfca538198c96");

export async function getStaticProps({ params }) {
  // Fetch the builder content
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url',
    options: { noTargeting: true },
  });

  return {
    paths: pages.map(page => `${page.data?.url}`),
    fallback: true,
  };
}



// Builder.registerComponent(
//   dynamic(() => import('../components/heading')),
//   {
//     name: 'Heading',
//     inputs: [{ name: 'title', type: 'text' }],
//     image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
//   }
// )



Builder.registerComponent(dynamic(() => import('../components/aboutUs')), {
  name: 'AboutUs',
  inputs: [
    {
      name: 'reviews',
      type: 'list',
      defaultValue: [
        {
          reviewText: 'hello'
        }],
      subFields: [
        {
          name: 'heading',
          type: 'string',
        },
        {
          name: 'mainheading',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
        {
          name: 'link',
          type: 'string',
        }
      ],
    }
  ],
})


Builder.registerComponent(dynamic(() => import('../components/missionSection')), {
  name: 'MissionSection',
  inputs: [
    {
      name: 'reviews',
      type: 'list',
      defaultValue: [
        {
          reviewText: 'hello'
        }],
      subFields: [
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,

        },
      ],
    }
  ],
})
Builder.registerComponent(dynamic(() => import('../components/journey')), {
  name: 'JourneySection',
  inputs: [
    {
      name: 'reviews',
      type: 'list',
      defaultValue: [
        {
          reviewText: 'hello'
        }],
      subFields: [
        {
          name: 'heading',
          type: 'string',
        },
        {
          name: 'subheading',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
      ],
    }
  ],
})

Builder.registerComponent(dynamic(() => import('../components/expertiseSection')), {
  name: 'ExpertiseSection',
  inputs: [
    {
      name: 'reviews',
      type: 'list',
      defaultValue: [
        {
          reviewText: 'hello'
        }],
      subFields: [
        {
          name: 'heading',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
        {
          name: "info",
          type: "string"
        }
        , {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,

        },

      ],
    }
  ],
})
Builder.registerComponent(dynamic(() => import('../components/menuBar')), {
  name: 'MenuBar',
  inputs: [
    {
      name: 'reviews',
      type: 'list',
      defaultValue: [
        {
          reviewText: 'hello'
        }],
      subFields: [
        {
          name: 'heading',
          type: 'string',
        },
        {
          name: "dropList",
          type: "list",
          subFields: [
            {
              name: 'content',
              type: 'string',
            },
          ]
        },


      ],
    }
  ],
})













export default function Page({ page }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }



  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
    </>
  );
}