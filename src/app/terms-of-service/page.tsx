export const metadata = {
  title: "Terms of Service | Yanegi",
  description: "Yanegi Terms of Service",
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-[#060606] font-[family-name:var(--font-poppins)] pt-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-oswald)]">Terms of Service</h1>
      
      <div className="flex flex-col gap-6 text-lg">
        <p>Effective Date: April 5, 2026</p>
        <p>Last Updated: April 5, 2026</p>
        
        <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and Yanegi ("Platform," "we," "us," or "our") governing your access to and use of the Yanegi mobile application, launched in April 2026. By creating an account or using any part of the Platform, you confirm that you have read, understood, and agree to be bound by these Terms.</p>
        
        <h3 className="text-2xl font-semibold mt-4">Acceptance of Terms</h3>
        <p>By downloading, installing, registering, or using the Yanegi application, you agree to these Terms in full. If you disagree with any part of these Terms, you must immediately stop using the Platform and delete your account.</p>
        
        <h3 className="text-2xl font-semibold mt-4">Eligibility</h3>
        <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>You must be of legal age to enter into a binding contract under the laws of India (Indian Contract Act, 1872).</li>
            <li>By registering, you confirm that you meet all eligibility requirements applicable in your jurisdiction.</li>
            <li>You must have the authority and legal capacity to agree to these Terms.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-4">Nature of the Platform — Intermediary Status</h3>
        <p>Yanegi is a technology platform and intermediary as defined under the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Yanegi facilitates event discovery, event hosting by any user, and communication between users.</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Yanegi does not organize, plan, manage, or supervise any events listed on the Platform.</li>
            <li>Yanegi does not verify, endorse, or guarantee the accuracy, legality, safety, or authenticity of any event, user, or content.</li>
            <li>All events are entirely created, managed, and conducted by users acting independently.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-4">User Accounts</h3>
        <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You are solely responsible for all activity that occurs under your account.</li>
            <li>You must provide accurate, current, and complete information during registration.</li>
            <li>One user may hold only one active account.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-4">Event Hosting — Rights and Responsibilities</h3>
        <p>Any registered user on Yanegi may create and host events. As a host, you agree that you:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Are solely responsible for the planning, organization, safety, and conduct of your event.</li>
            <li>Will ensure your event complies with all applicable local, state, and national laws.</li>
            <li>Will provide accurate and truthful information about your event.</li>
            <li>Will not host events that involve or promote illegal activities or behaviors.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-4">Limitation of Liability</h3>
        <p>To the maximum extent permitted by applicable Indian law: Yanegi shall not be liable for any injury, death, property damage, financial loss, or any other harm arising from real-world events organized through the Platform.</p>
        
        <h3 className="text-2xl font-semibold mt-4">Governing Law and Dispute Resolution</h3>
        <p>These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in India. Before initiating legal proceedings, contact us at supportyanegi@gmail.com to attempt informal resolution within 30 days.</p>
      </div>
    </main>
  );
}
