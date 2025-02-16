import { useState } from 'react';

export default function LlamaPromptApp() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleStart = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/start-llama', {
        method: 'POST',
      });
      if (res.ok) {
        setIsRunning(true);
        alert('LLaMA 3.1 started successfully.');
      } else {
        alert('Failed to start LLaMA 3.1.');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleStop = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/stop-llama', {
        method: 'POST',
      });
      if (res.ok) {
        setIsRunning(false);
        alert('LLaMA 3.1 stopped successfully.');
      } else {
        alert('Failed to stop LLaMA 3.1.');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/submit-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data && data.response) {
        setResponse(data.response);
      } else {
        setResponse('Error: No response from the backend.');
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-xl font-bold mb-4">LLaMA 3.1 Prompt Interface</h1>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm"
          disabled={isRunning}
        >
          Start LLaMA 3.1
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm"
          disabled={!isRunning}
        >
          Stop LLaMA 3.1
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded-md"
          rows="4"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={handlePromptChange}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm"
          disabled={loading || !isRunning}
        >
          {loading ? 'Submitting...' : 'Submit Prompt'}
        </button>
      </form>

      <div className="mt-4 p-4 border rounded-md bg-gray-50">
        <h2 className="text-lg font-medium">Response:</h2>
        <p className="mt-2 whitespace-pre-wrap text-gray-700">
          {response || 'No response yet.'}
        </p>
      </div>
    </div>
  );
}
