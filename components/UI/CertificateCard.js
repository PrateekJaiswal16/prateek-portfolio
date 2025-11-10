import LinkButton from './LinkButton';
import Badge from './Badge';
import Image from 'next/image';

// 1. We expect a 'certificate' prop
const CertificateCard = (props) => {

    const { certificate } = props;

    return (
        // 2. Uses the same styling as ProjectCard for consistency
        <div className="bg-[var(--card-dark)] rounded-[1rem] overflow-hidden border-[2px] border-gray-600 h-full flex flex-col">
            <div className="flex flex-col">
                <div className='p-4 md:p-6 w-full'>
                    <Image
                        src={certificate.image} // 3. Use certificate data
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%' }}
                        className='rounded-lg object-cover w-full h-auto aspect-video hover:scale-101 transition duration-300 ease-in-out'
                        alt={`${certificate.title} - ${certificate.issuer}`} // 4. Updated alt text
                    />
                </div>

                <div className='p-4 md:p-6 w-full flex flex-col flex-grow'>
                    <div className="flex-grow">
                        <div className='w-fit px-2 bg-[var(--card-badge)] rounded-4xl font-mono text-[11px] md:text-[12px] font-light tracking-wide mt-0 mb-1'>
                            {/* 5. Use 'issuer' instead of 'type' */}
                            <p className="p-1 uppercase">{certificate.issuer}</p>
                        </div>

                        <div className='w-fit'>
                            {/* 6. Use 'title' */}
                            <h3 className="font-mono text-[26px] font-semibold tracking-tight">{certificate.title}</h3>
                            <div className="title-line h-[0.5px] w-[160px] md:w-[180px] bg-gray-500 block"></div>
                        </div>

                        <div className="flex flex-wrap justify-left p-1 md:p-0 mt-4">
                            {
                                // 7. Map over 'skills' (from your JSON)
                                certificate.skills.map((skill, index) => (
                                    <Badge skill={skill} index={index} key={index} />
                                ))
                            }
                        </div>

                       
                    </div>

                    <div className='mt-4'>
                        <div className="inline md:flex justify-left gap-2">
                            {
                                // 9. Use 'credentialLink' and change button text
                                certificate.credentialLink ?
                                    <LinkButton bgcolor={'white'} textcolor={'black'} text={'View Credential'} link={certificate.credentialLink} />
                                    :
                                    null
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CertificateCard;