export const metadata = {
  title: "Privacy Policy | Yanegi",
  description: "Yanegi Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-[#060606] font-[family-name:var(--font-poppins)] pt-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-oswald)]">Privacy Policy</h1>
      
      <div className="flex flex-col gap-6 text-lg">
        <p>Effective Date: April 5, 2026</p>
        <p>Last Updated: April 5, 2026</p>
        
        <p>This Privacy Policy explains how Yanegi ("we," "our," or "us") collects, uses, stores, shares, and protects your personal data when you use the Yanegi mobile application (launched April 2026) and related services (collectively, the "Platform"). This Policy complies with the Digital Personal Data Protection Act, 2023 ("DPDP Act") of India and reflects global best practices including GDPR-aligned standards.</p>
        <p>By accessing or using Yanegi, you consent to the collection and use of your information as described in this Policy. If you do not agree, please do not use the Platform.</p>
        
        <h3 className="text-2xl font-semibold mt-4">Information We Collect</h3>
        <p><strong>1. Personal Information</strong><br/>
        When you register and use Yanegi, we collect: Full name and display username, Email address and phone number, Date of birth, Profile photograph and bio, Gender (optional, self-declared).</p>
        
        <p><strong>2. Location Data</strong><br/>
        Location data is classified as sensitive personal data under the DPDP Act, 2023. We collect it only with your explicit consent and for defined purposes. Precise GPS location (collected in real-time when you use the Discover Nearby Events feature), Approximate location derived from IP address, Saved locations.</p>
        
        <p><strong>3. Event Data</strong><br/>
        Events you create: title, description, date, time, location, photos, and tags. Events you join or express interest in. Your attendance history and event participation records.</p>
        
        <p><strong>4. Chat and Communication Data</strong><br/>
        Messages sent and received in event-specific group chats. Reports submitted against other users or events.</p>
        
        <p><strong>5. Device and Technical Data</strong><br/>
        Device type, operating system, and version. App version and unique device identifiers. IP address, network type, crash logs, and performance data.</p>
        
        <p><strong>6. Usage Data</strong><br/>
        Features you interact with and how you navigate the Platform. Search queries entered within the app. Timestamps of logins, event interactions, and in-app actions.</p>
        
        <p><strong>7. Payment Data (Future Feature)</strong><br/>
        If payment features are introduced, processing will be handled by certified third-party payment gateways. Yanegi will not store full card details. We will only retain transaction reference IDs and amounts for our records.</p>
        
        <h3 className="text-2xl font-semibold mt-4">Purpose of Data Collection</h3>
        <p>We collect and process your personal data solely for the following purposes:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Account Creation and Authentication:</strong> To create, manage, and secure your Yanegi account.</li>
            <li><strong>Age Verification:</strong> To ensure all users meet the minimum age requirement under applicable law.</li>
            <li><strong>Event Discovery and Hosting:</strong> To show you nearby events, allow any user to create and host events, and manage event participation.</li>
            <li><strong>Location-Based Services:</strong> To display relevant events near your location.</li>
            <li><strong>In-App Communications:</strong> To enable event group chats between users.</li>
            <li><strong>Safety and Trust:</strong> To investigate reports of abuse, illegal content, or policy violations.</li>
            <li><strong>Platform Improvement:</strong> To analyze usage patterns, fix bugs, and improve app performance.</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable Indian laws, court orders, and regulatory requirements.</li>
            <li><strong>Customer Support:</strong> To respond to your queries, complaints, or requests.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal data to third parties for their marketing or commercial purposes.</p>
        
        <h3 className="text-2xl font-semibold mt-4">Sharing of Personal Data</h3>
        <p><strong>1. With Other Users</strong><br/>
        Your display name and profile photo are visible to other users. Events you host are publicly visible to all users. Messages sent in event chats are visible to all participants. Your exact location is never shared with other users.</p>
        
        <p><strong>2. With Third-Party Service Providers</strong><br/>
        Mapping Services (e.g., Google Maps API). Analytics Providers (e.g., Firebase Analytics). Cloud Infrastructure (e.g., AWS, Google Cloud). Customer Support Tools.</p>
        
        <p><strong>3. With Law Enforcement and Authorities</strong><br/>
        We may disclose your personal data to government authorities or courts where required by law.</p>

        <h3 className="text-2xl font-semibold mt-4">Contact and Grievance Officer</h3>
        <p>If you are not satisfied with our response, you may escalate your complaint to the Data Protection Board of India once operational under the DPDP Act, 2023.</p>
      </div>
    </main>
  );
}
