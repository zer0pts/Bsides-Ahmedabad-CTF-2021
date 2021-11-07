import useSWR from "swr";

export interface CTF {
  start_at: number;
  end_at: number;
  register_open: boolean;
  is_open: boolean;
  is_running: boolean;
  is_over: boolean;
}

const useCTF = () =>
  useSWR<CTF>("/ctf", () => {
    return {
      end_at: 1636254000,
      is_open: true,
      is_over: true,
      is_running: false,
      register_open: true,
      start_at: 1636167600,
    };
  });

export default useCTF;
