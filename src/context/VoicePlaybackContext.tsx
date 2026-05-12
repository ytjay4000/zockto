import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

type Ctx = {
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
};

const VoicePlaybackContext = createContext<Ctx>({
  playingId: null,
  setPlayingId: () => {},
});

export const VoicePlaybackProvider = ({ children }: { children: ReactNode }) => {
  const [playingId, setPlayingIdState] = useState<string | null>(null);
  const setPlayingId = useCallback((id: string | null) => setPlayingIdState(id), []);
  return (
    <VoicePlaybackContext.Provider value={{ playingId, setPlayingId }}>
      {children}
    </VoicePlaybackContext.Provider>
  );
};

export const useVoicePlayback = () => useContext(VoicePlaybackContext);
