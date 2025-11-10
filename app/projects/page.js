
import ProjectsWithFilter from '@/components/UI/ProjectsWithFilter';
import SectionHeader from '@/components/UI/SectionHeader';
import data from '@/data/data.json';

export const metadata = {
    title: 'Projects | Prateek Jaiswal - Full-Stack Web Developer',
    description:
        'Explore all projects by Prateek Jaiswal, a full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
    openGraph: {
        title: 'Projects | Prateek Jaiswal - Full-Stack Web Developer',
        description:
            'Explore all projects by Prateek Jaiswal, a full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
        url: 'https://vandit-shah.me/projects',
        images: [
            {
                url: 'https://vandit-shah.me/images/og-image-projects.png',
                width: 1200,
                height: 630,
                alt: 'Prateek Jaiswal Projects Preview',
            },
        ],
    },
    alternates: {
        canonical: 'https://vandit-shah.me/projects',
    },
};

export default function ProjectsPage() {
    const { projects } = data.data;

    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    return (
        <>
            {/* 3. The script tag is perfectly fine here, 
                 it doesn't need <head> tags around it. */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        projects.map((project) => ({
                            '@context': 'https://schema.org',
                            '@type': 'ImageObject',
                            url: `https://vandit-shah.me${project.image}`,
                            name: `${project.title} Project Image`,
                            caption: `${project.title} by Vandit Shah - ${project.category} Project`,
                            associatedMedia: {
                                '@type': 'WebPage',
                                url: 'https://vandit-shah.me/projects',
                            },
                        }))
                    ),
                }}
            />
            
            {/* 2. REMOVED the <head> tag from here */}
            <section className="bg-black text-white py-6 mt-22">
                <main className="mx-auto px-6 md:px-8 lg:px-16">
                    <SectionHeader title={'projects'} description={'View all my latest projects here'} linkText={'back to home'} link={'/'} />
                    <div className="mt-16">
                        <ProjectsWithFilter projects={projects} categories={categories} />
                    </div>
                </main>
            </section>
            {/* 2. REMOVED the </head> tag from here */}
        </>
    );
}