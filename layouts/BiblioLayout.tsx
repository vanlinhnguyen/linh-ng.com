import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function BiblioLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>

          {/* Resume Content */}
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
      {/* Endorsements Section */}
      <div className="mt-12 border-t border-gray-300 pt-8 dark:border-gray-600">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
            Endorsements
          </h3>
        </div>
        {/* Endorsements Container */}
        <div className="prose max-w-none space-y-6 dark:prose-invert">
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "Linh has certainly exceeded my expectations (and) ramping up (on the new team) at
            astonishingly great pace and being one of the most trustworthy engineers on team..."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Sagar A. (Meta)
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "Linh showed amazing flexibility and resilience in the light of changing priorities..."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Sasha S. (Meta)
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "Linh is an exceptional team player who consistently demonstrates his willingness to
            help and collaborate with others ..."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Marco T. (Meta)
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "Linh was an excellent mentor during my internship at Amadeus. His strong communication
            skills and extensive domain knowledge were invaluable to me. He not only explained how
            to design and execute big data processing workflows but also guided me in reflecting on
            my career goals and the path I wanted to pursue."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Tristan S. (Google)
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "I have known Linh for 6 months as a mentor for my internship at Amadeus. From my
            experience, Linh is curious, competent, and easy to work with. He was a great colleague,
            and we enjoyed working on problems related to machine learning and software engineering
            in the context of flight search and recommendation."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Imad A. (PhD, Criteo)
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "Linh is probably the best researcher our company employed during the last 15 years. I
            was very impressed by the speed he understood our requirements and trained well
            performing DNN models..."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Alexey K. (PhD, Digital Barriers)
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-600 dark:text-gray-300">
            "The best Data-Scientist in our team at the time. Curious and resourceful, always
            finding the best ML tools for the job at hand."
          </blockquote>
          <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
            Edward O. (Amadeus)
          </p>
        </div>
      </div>
    </>
  )
}
