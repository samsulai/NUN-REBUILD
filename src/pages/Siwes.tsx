import Reveal from "../components/Reveal"

const introParagraphs = [
  "Industrial Training refers to work experience that is relevant to professional development prior to graduation. One of the requirements for the award of Bachelor of Engineering or Science is that students must complete at least 24 weeks of Industrial Training. Industrial Training is normally accumulated during the semester breaks at the end of the second, third or fourth year. For Engineering Faculty students, 24 weeks are undertaken as SIWES during the 2nd semester of 400L and the long vacation.",
  "The Board of Engineers (COREN), which is the organization that accredits engineering programs parallel with NUC, strongly advocates that an industrial training experience attachment of at least 24 weeks duration is included in all engineering undergraduate degree programs.",
  "Students should note that Industrial Training is an essential component in the development of the practical and professional skills required of an Engineer and an aid to prospective employment. Many employers regard this period as a chance to vet new employees for future employment.",
  "All students should make considerable effort and give sufficient thought into obtaining the most relevant and effective Industrial Training. Whilst difficult, it is desirable to obtain experience in a range of activities, such as e.g. design office, laboratory and on-site situations. It should also be noted that developing an awareness of general workplace behavior and interpersonal skills are important objectives of the Industrial Training experience.",
]

const objectives = [
  "To expose students to engineering experience and knowledge, which is required in industry, where these are not taught in the lecture rooms.",
  "To apply the engineering knowledge taught in the lecture rooms in real industrial situations.",
  "To use the experience gained from the ‘Industrial Training’ in discussions held in the lecture rooms.",
  "To get a feel of the work environment.",
  "To gain experience in writing reports in engineering works/projects.",
  "To expose students to the engineers' responsibilities and ethics.",
  "To expose the students to future employers as well as to introduce the Industrial Training Program available within Nile University of Nigeria.",
]

const placementParagraphs = [
  "One academic staff from each engineering discipline (Petroleum and Gas, Electrical-Electronics, and Civil Engineering) has been appointed as Adviser for Industrial Training. Contact her/him to request a letter from the University confirming that you are a student of Nile University of Nigeria, and supporting your efforts to find an industrial placement.",
  "It is the responsibility of each student to obtain her/his own industrial placement.",
  "The Adviser might assist you with a list of possible contacts within the industry.",
  "If you have any doubts or questions about a proposed employment, you should consult the Adviser for Industrial Training in your discipline. You may also consult other academic staff on the availability of Industrial Training.",
  "Students who wish to pursue their Industrial Training interstate, or overseas are strongly encouraged to do so, provided they have sufficient information regarding the proposed nature of the work.",
  "Your attempts to obtain industrial experience are part of the training; use your initiative and document how you have gained each employment in your report.",
]

const approvalParagraphs = [
  "In order for a work period to be counted as part of Industrial Training, the proposed employment must be approved by the Faculty/University (through the respective Adviser) prior to commencement of work.",
  "Approval will NOT be automatically granted. A student may be required to submit further supporting information for the intended employment to be approved.",
  "Retrospective approvals may not be granted. Fresh approvals should be sought for each different period of Industrial Training.",
  "Once an Industrial Training program is agreed upon, a student will be registered with the Faculty. The students are reminded that unregistered placement will be nullified.",
  "You can always communicate with the Adviser using the normal e-mail or telephone while you are employed overseas. Overseas experience is often viewed favourably by employers when seeking permanent full time employment after graduation.",
]

const visitObjectives = [
  "To visit the students involved with Industrial training and to discuss with them and the officers involved in giving the training on the matter of the training program or other matter concerned/relevant. Separate discussions will be held with the Lecturer and the training supervisor as well as with the students.",
  "To visit other former graduates of the engineering faculty who may be working in the training organizations, which can give feedback on the courses offered by the university.",
  "To brief the officers of the training organizations on the engineering courses as well as making relations with the faculty.",
  "To survey any new training places for industrial training.",
  "To discuss the possibility of the organization accepting the graduate to work with the company. The students and the company will be informed of the date and time of the visit.",
  "Students are not allowed to change the place of training during the industrial training period except by getting written permission from the Industrial Training Adviser of the respective discipline. If there is a valid reason for the change of placement, the student needs to discuss this with the Industrial Training Adviser.",
]

function Siwes() {
  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              SIWES
            </h1>
            <p className="mt-4 max-w-2xl font-normal text-[19px] leading-[30px] text-gray-100">
              An overview of the Students Industrial Work Experience Scheme.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <div className="space-y-6 text-[19px] leading-[30px] text-[#333435]">
            {introParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Introduction
              </h2>
              <p>
                All students who are registered for a Bachelor of Engineering (Hons) at Nile
                University of Nigeria are required to undergo an &lsquo;Industrial Training
                Attachment&rsquo; for a period of 24 weeks during Year 4, 2nd Semester.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Industrial Training Objectives
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                {objectives.map((item) => (
                  <li key={item.slice(0, 24)}>{item}</li>
                ))}
              </ol>
              <p className="mt-4">
                With all the experience and knowledge acquired, it is hoped that students will be
                able to choose appropriate work upon graduation.
              </p>
            </div>

            <blockquote className="border-l-4 border-gold bg-[#f8f9fb] px-6 py-5 italic text-navy">
              &ldquo;I hear and I forget. I see and I remember. I do and I understand.&rdquo;
            </blockquote>

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Students Industrial Work Experience Scheme &mdash; Overview
              </h2>
              <p>
                The industry exposure enhances your work life through added enthusiasm and
                commitment; provides a lifelong learning experience; is an opportunity to engage
                with the profession to which they aspire in a realistic work environment;
                appreciate and understand the practical application of your academic program;
                work with professional mentors and begin to build networks within their
                profession.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Obtaining Industrial Placement
              </h2>
              <div className="space-y-4">
                {placementParagraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Approvals
              </h2>
              <div className="space-y-4">
                {approvalParagraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Industrial Training Visit by the Industrial Training Adviser
              </h2>
              <p className="mb-3">The objectives of the Adviser's visit to the training place are as follows:</p>
              <ol className="list-decimal space-y-2 pl-6">
                {visitObjectives.map((item) => (
                  <li key={item.slice(0, 24)}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Siwes
