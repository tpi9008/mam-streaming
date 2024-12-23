import { useMsal } from "@azure/msal-react";
import EpisodeList from "@/components/EpisodeList/EpisodeList.jsx";

const App = () => {
  const { instance, accounts, inProgress } = useMsal();

  const handleLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup({
        scopes: ["Files.Read.All", "User.Read"],
        prompt: "select_account", // Add this to force account selection
        redirectUri: window.location.origin // Explicitly set the redirect URI
      });

      console.log("Login successful", loginResponse);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">MAM Streaming</h1>
            {!accounts[0] ? (
              <button
                onClick={handleLogin}
                disabled={inProgress !== "none"}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {inProgress !== "none" ? "Signing in..." : "Sign In"}
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  {accounts[0].username}
                </div>
                <button
                  onClick={() => instance.logoutPopup()}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <EpisodeList />
      </main>
    </div>
  );
};

export default App;