import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";

// Mock the dependencies
vi.mock("@tanstack/react-start/server", () => ({
  getRequest: vi.fn(),
}));

vi.mock("@supabase/supabase-js", () => ({
  createClient: vi.fn(),
}));

// Set env vars
process.env["SUPABASE_URL"] = "https://mock.supabase.co";
process.env["SUPABASE_PUBLISHABLE_KEY"] = "mock_key";

import { adminClient } from "./adminClient.server";

describe("adminClient", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("extracts authorization header from getRequest if no authToken is provided", () => {
    const mockRequest = {
      headers: new Headers({
        authorization: "Bearer mock_token_from_header",
      }),
    };
    (getRequest as any).mockReturnValue(mockRequest);

    adminClient();

    expect(createClient).toHaveBeenCalledWith(
      "https://mock.supabase.co",
      "mock_key",
      expect.objectContaining({
        global: {
          headers: {
            Authorization: "Bearer mock_token_from_header",
          },
        },
      }),
    );
  });

  it("uses explicitly provided authToken over getRequest header", () => {
    const mockRequest = {
      headers: new Headers({
        authorization: "Bearer mock_token_from_header",
      }),
    };
    (getRequest as any).mockReturnValue(mockRequest);

    adminClient("explicit_mock_token");

    expect(createClient).toHaveBeenCalledWith(
      "https://mock.supabase.co",
      "mock_key",
      expect.objectContaining({
        global: {
          headers: {
            Authorization: "Bearer explicit_mock_token",
          },
        },
      }),
    );
  });
});
