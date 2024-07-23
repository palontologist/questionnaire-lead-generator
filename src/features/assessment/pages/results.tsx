import { getResponses } from "../../../data/responses";
import { pageFactory } from "../../../util/action";
import { cn } from "../../../util/cn";
import { assessmentQuestions, Categories } from "../data/questions";
import { startCase } from "lodash";


function WarningIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={cn("size-6", className)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}

function Category({
  category,
  score,
}: {
  category: Categories;
  score: number;
}) {
  return (
    <div
      class={cn(
        "space-y-8 rounded-xl border border-neutral-content bg-base-300 p-8",
        {
          "border-red-500": score < 3,
        },
      )}
    >
      <h1 class="flex items-center gap-2 text-4xl">{startCase(category)}</h1>

      <p>Category Score of {score}</p>

      {score < 3 && (
        <div class={"flex items-center gap-4"}>
          <WarningIcon className="size-6 stroke-red-500" /> You scored low in
          this category.
        </div>
      )}

      <p>
        These questions will help us understand your background and the context
        of your business. This will help us provide more accurate
        recommendations.
      </p>
    </div>
  );
}

async function fetchApiData() {
  const response = await fetch('https://v2-api.respell.ai/spells/start', {
    method: 'POST',
    headers: {
      'x-api-key': 'clxf6ath80doehxs0zel76oji',
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      spellId: 'clyydjr6v036vm9cmxmuachzr',
      wait: true,
      inputs: {},
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const registerResultsPage = pageFactory(
  "/assessment/results",
  async (c) => {
    const responses = getResponses(c);

    // Fetch API data
    let apiData;
    try {
      apiData = await fetchApiData();
    } catch (error) {
      console.error("Failed to fetch API data:", error);
      apiData = null;
    }

    // filter out the responses.questions by type
    const categoryScores: Record<Categories, number> = assessmentQuestions
      .filter((question) => question.section === "assessment")
      .reduce((acc: any, question) => {
        if (!acc[question.category]) {
          acc[question.category] = 0;
        }
        const responseIdx = responses.questions[question.id];
        acc[question.category] += parseInt(responseIdx) + 1;
        return acc;
      }, {});

    return (
      <div className="container mx-auto min-h-screen max-w-2xl">
        <div class="space-y-8">
          <h1 class="text-4xl">Results</h1>

          <p>
            These questions will help us understand your background and the
            context of your business. This will help us provide more accurate
            recommendations.
          </p>

          <Category
            category="environmental"
            score={categoryScores["environmental"]}
          />
          <Category category="social" score={categoryScores["social"]} />
          <Category category="governance" score={categoryScores["governance"]} />

          {apiData && (
            <div class="mt-8">
              <h2 class="text-2xl font-bold">API Data</h2>
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    );
  },
  {
    title: "Results | Impact Assessment",
  },
);