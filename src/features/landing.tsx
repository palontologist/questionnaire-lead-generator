import { pageFactory } from "../util/action";

export const registerLandingPage = pageFactory(
  "/",
  async (c) => {
    return (
      <div class="space-y-4">
        <section class="py-12">
          <div class="container mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-semibold text-gray-200">
              A <span class="text-neutral-content">good</span> business deserves
              to be
              <span class="text-base-content"> sustainable and impactful</span>
            </h1>
            <p class="mt-4 text-xl text-gray-400">
              Our survey analyzes various aspects of your business's sustainability perfomance  to pinpoint
              areas for improvement. You'll receive a detailed PDF report with
              personalized insights and recommendations.
            </p>
          </div>
        </section>

        <section class="py-12">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              <div class="rounded-lg border border-neutral-content p-6 shadow-lg">
                <h3 class="text-xl font-bold text-base-content">
                  Identify Weaknesses
                </h3>
                <p class="mt-2 text-neutral-content">
                  Understand your company's environmental and social impact.
                  Identify gaps in your sustainability practices.
                </p>
              </div>
              <div class="rounded-lg border border-neutral-content p-6 shadow-lg">
                <h3 class="text-xl font-bold text-base-content">
                  Customized Insights
                </h3>
                <p class="mt-2 text-neutral-content">
                  Receive a tailored report specific to your company's industry and size.
                  Compare your perfomance against sustainability benchmarks and best practice.
                </p>
              </div>
              <div class="rounded-lg border border-neutral-content p-6 shadow-lg">
                <h3 class="text-xl font-bold text-base-content">
                  Actionable Recommendations
                </h3>
                <p class="mt-2 text-neutral-content">
                  Get practical tips and strategies to enhance your company's
                  sustainability efforts.
                  Align your business with relevant Sustainable Development Goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="py-12">
          <div class="container mx-auto space-y-4 text-center">
            <h2 class="text-2xl font-semibold">
              Ready to Improve Your Impact?
            </h2>
            <p class="mt-4">
              Take our survey today and start your journey towards Sustainability
              excellence.
            </p>
            <a href="/assessment/start" class="btn btn-primary">
              Take the Survey
            </a>
            <div>
            <a href="https://app.sessions.us/book/george-karani/impact-meetings" class="btn btn-primary">
                Schedule a demo
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  },
  {
    title: "Impact Performance Survey",
  },
);
