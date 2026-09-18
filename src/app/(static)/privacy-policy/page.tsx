export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4 text-gray-600">Last updated: September 18, 2026</p>

                <h2 className="text-2xl font-bold mb-4">1. What data we collect</h2>
                <p className="mb-4">
                    When you sign in with your Google account, Kodi Sync requests access to the following data:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-2">
                        <strong>Google Drive files (read-only):</strong> file names, file IDs, and metadata of
                        the files stored in your Google Drive.
                    </li>
                    <li className="mb-2">
                        <strong>Google Photos library (read-only):</strong> photo names, IDs, and metadata of
                        the photos stored in your Google Photos library.
                    </li>
                    <li className="mb-2">
                        <strong>Email address and basic profile information:</strong> your name, email address,
                        and profile information, which is used to display your account as an option menu in Kodi.
                    </li>
                </ul>
                <p className="mb-4">
                    The add-on stores only your account name, account id, and the access data on your Kodi device.
                </p>

                <h2 className="text-2xl font-bold mb-4">2. How we use the data</h2>
                <p className="mb-4">
                    We use this access to stream your personal media files directly to the Kodi media player.
                    The add-on accesses your files information only from your Kodi device directly to the cloud
                    drive provider, for the purpose of displaying your files in Kodi so you can play your videos
                    and music, or view your pictures.
                </p>

                <h2 className="text-2xl font-bold mb-4">3. Data sharing</h2>
                <p className="mb-4">
                    We do not sell your data to third parties, and we do not share your data with third parties
                    for marketing or advertising purposes.
                </p>
                <p className="mb-4">
                    The add-on transmits or shares information only to the developer of this add-on if you explicitly agreed to it and only if an error happened,
                    for the sole purpose of helping to resolve the issues quickly.
                </p>
                <p className="mb-4">
                    This information includes the file id, filename, ip address and never includes sensitive information like access codes, emails or user names.
                    You can always disable this option in the configuration menu.
                </p>

                <h2 className="text-2xl font-bold mb-4">4. Google API Services User Data Policy</h2>
                <p className="mb-4">
                    The use and transfer to any other app of information received from Google APIs will adhere to
                    Google API Services User Data Policy, including the Limited Use requirements.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. Scopes requested by the add-on</h2>
                <p className="mb-4">Each scope requested by the add-on has a specific use and need:</p>
                <h3 className="text-xl font-semibold mb-2">Google Drive:</h3>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Scope</th>
                            <th className="py-2 px-4 bg-gray-200">Use/Need</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">https://www.googleapis.com/auth/drive.readonly</td>
                            <td className="border px-4 py-2">Access your file information in Read Only mode to be able to navigate your files and play them in Kodi.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">https://www.googleapis.com/auth/drive.photos.readonly</td>
                            <td className="border px-4 py-2">Access your photos in Read Only mode to be able to navigate your photos and display them in Kodi.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">https://www.googleapis.com/auth/photoslibrary.readonly</td>
                            <td className="border px-4 py-2">Access your Google Photos library in Read Only mode to be able to navigate your photos and display them in Kodi.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">profile</td>
                            <td className="border px-4 py-2">Access your profile information (including your name and email address) to display your account as an option menu in Kodi.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
