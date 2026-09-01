"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Flame,
  LineChart,
  Link2,
  ListTodo,
  Medal,
  MessageSquareQuote,
  Mic,
  Sparkles,
  Target,
  Trophy,
  Users2,
  Zap
} from "lucide-react";
import { HeroHeader } from "@/components/layout/shells";
import { Avatar, Badge, Button, Card, InlineStat, Input, MetricCard, Progress, SectionHeader, SoftPanel, Textarea } from "@/components/ui";
import { HorizontalBars, MiniLineChart, TinySpark } from "@/components/charts";
import {
  activeTasks,
  consistencyData,
  currentLeader,
  currentStudent,
  feedback,
  groups,
  initiatives,
  leaderChart,
  leaderGroups,
  leaderMetrics,
  leaderboard,
  notifications,
  progressData,
  skillScores,
  submissions,
  todayTask
} from "@/mock";
import { cn, formatPercent, initials } from "@/lib/utils";
import type { Initiative } from "@/types";

export function LandingPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f8faff_0%,#ffffff_24%,#f7f9fc_100%)] text-slate-950">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div className="max-w-3xl">
          <Badge tone="orange" className="mb-5">AI-powered initiative tracking</Badge>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            Build consistency.
            <span className="block bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">Measure growth.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            TaskMesh transforms peer-led challenges and learning initiatives into structured, measurable growth journeys powered by automation and AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/app/dashboard">
                Explore TaskMesh
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="#how">See how it works</a>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <InlineStat label="Daily submissions" value="1,284" subtext="Across all live initiatives" />
            <InlineStat label="Average feedback" value="8 min" subtext="AI evaluation turnaround" />
            <InlineStat label="Consistency uplift" value="+22%" subtext="Compared to manual tracking" />
          </div>
        </div>

        <Card className="relative overflow-hidden border-slate-200 bg-slate-950 p-0 text-white shadow-[0_30px_90px_-36px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.20),transparent_32%),radial-gradient(circle_at_75%_28%,rgba(124,58,237,0.16),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(15,23,42,0.92))]" />
          <div className="relative p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">TaskMesh workspace preview</p>
                <p className="mt-2 text-lg font-semibold">Student dashboard</p>
              </div>
              <Badge tone="green">Live</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard label="Current streak" value="12 days" delta="+3" />
              <MetricCard label="Weekly consistency" value="86%" delta="+7%" tone="green" />
              <MetricCard label="Average score" value="87" delta="+4" tone="orange" />
              <MetricCard label="Leaderboard rank" value="#08" delta="+2" />
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">Today's task</p>
                    <h3 className="mt-2 text-xl font-semibold">Binary Search Challenge</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Complete 2 binary-search problems and explain your approach in a short voice note.
                    </p>
                  </div>
                  <Badge tone="orange">Medium</Badge>
                </div>
                <div className="mt-4 rounded-2xl bg-white/8 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Submission progress</span>
                    <span className="font-medium">{formatPercent(todayTask.progress)}</span>
                  </div>
                  <Progress value={todayTask.progress} className="mt-3 bg-white/10" />
                  <div className="mt-3 flex items-center justify-between text-xs text-white/55">
                    <span>Due today, 9:00 PM</span>
                    <span>Feedback will appear after submit</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">AI feedback</p>
                    <h3 className="mt-2 text-lg font-semibold">87 score</h3>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {feedback[0].strengths.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3">
                      <Badge tone="green">Strength</Badge>
                      <p className="text-sm leading-6 text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-white/15 p-3">
                  <TinySpark data={[64, 68, 70, 73, 77, 81, 87]} />
                  <div>
                    <p className="text-sm font-medium">Growth trend</p>
                    <p className="text-xs text-white/55">Moving up over the last 4 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <SectionHeader
          eyebrow="Why TaskMesh"
          title="Everything communities need to keep practice structured and visible"
          description="Use one system for tasks, submissions, AI evaluation, streaks, groups, and reports."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["Automated task flow", "Daily task assignment, reminders, and submission status tracking without manual spreadsheets.", ListTodo],
            ["AI evaluation", "Structured feedback, rubric scoring, and personalized improvement tips after each submission.", Sparkles],
            ["Consistency analytics", "Track streaks, weekly consistency, skill growth, and at-risk members in one place.", LineChart],
            ["Private groups", "Create accountability pods for special cohorts, peer review circles, or invite-only batches.", Users2],
            ["Leader insights", "Identify inactive learners, weak areas, and high performers with actionable reports.", BarChart3],
            ["Modern notifications", "Announcements, feedback, reminders, and milestones flow into a focused inbox.", Bell]
          ].map(([title, description, Icon]) => (
            <Card key={title as string} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-soft">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description as string}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A simple journey from discovery to growth"
          description="TaskMesh turns informal communities into measurable growth systems without adding friction."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {[
            ["Discover", "Browse initiatives by skill, difficulty, duration, or task frequency."],
            ["Join", "Enter public cohorts or private accountability pods with one click."],
            ["Practice", "Receive today's task and submit in the format that fits the task."],
            ["Evaluate", "AI scores against a rubric and returns structured feedback."],
            ["Improve", "Progress, streaks, and leaderboards update automatically."]
          ].map((step, index) => (
            <Card key={step[0]} className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{step[0]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step[1]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="initiatives" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <SectionHeader
          eyebrow="Initiatives preview"
          title="Built for any kind of peer-led challenge"
          description="From coding cohorts to speaking clubs and habit challenges, TaskMesh adapts to the initiative."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <MiniLineChart data={progressData} />
          <HorizontalBars data={skillScores} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <Card className="overflow-hidden border-slate-200 !bg-white p-0 text-slate-950">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8">
              <Badge tone="green">For leaders and participants</Badge>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Run multiple initiatives without losing the human side of learning.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                TaskMesh helps leaders automate the repetitive work while helping members see exactly how they are improving.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/sign-up">Start a workspace</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/leader/dashboard">Open leader view</Link>
                </Button>
              </div>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-8 lg:border-l lg:border-t-0">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Automated streak tracking",
                  "Private cohort groups",
                  "AI coaching feedback",
                  "Leaderboard and reports",
                  "Submission review history",
                  "Growth analytics"
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export function SignInView() {
  return (
    <div className="grid min-h-screen bg-slate-50 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.28),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(124,58,237,0.18),transparent_30%),linear-gradient(145deg,#0f172a_0%,#172554_100%)] px-6 py-12 text-white">
        <div className="absolute -right-24 top-20 h-56 w-56 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-white/10" />
        <div className="relative w-full max-w-xl taskmesh-enter">
          <Badge tone="green" className="mb-5">Welcome back</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Continue your growth journey.</h1>
          <p className="mt-4 text-base leading-7 text-white/70">Pick up where you left off across tasks, feedback, and initiative progress.</p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Your workspace</span><span className="h-2 w-2 rounded-full bg-emerald-400" /></div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-white/10 p-3"><p className="text-xs text-white/55">Today&apos;s focus</p><p className="mt-2 text-sm font-medium">Binary Search</p><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-indigo-300" /></div></div><div className="rounded-2xl bg-white/10 p-3"><p className="text-xs text-white/55">AI score</p><p className="mt-2 text-2xl font-semibold">87</p><p className="mt-1 text-xs text-emerald-300">+4 this week</p></div><div className="rounded-2xl bg-white/10 p-3"><p className="text-xs text-white/55">Streak</p><p className="mt-2 text-2xl font-semibold">12 days</p><p className="mt-1 text-xs text-indigo-200">On track</p></div></div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="border-white/10 !bg-white/10 p-5 text-white shadow-none">
              <p className="text-sm text-white/60">Active initiatives</p>
              <p className="mt-3 text-3xl font-semibold">4</p>
            </Card>
            <Card className="border-white/10 !bg-white/10 p-5 text-white shadow-none">
              <p className="text-sm text-white/60">Ready feedback</p>
              <p className="mt-3 text-3xl font-semibold">2</p>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-l border-slate-200/70 bg-white px-6 py-12">
        <Card className="w-full max-w-md p-7 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">Sign in</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Access your workspace</h2>
          <div className="mt-6 space-y-4">
            <div><label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="sign-in-email">Email</label><Input id="sign-in-email" type="email" autoComplete="email" placeholder="aarav@example.com" /></div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="sign-in-password">Password</label>
              <Input id="sign-in-password" type="password" autoComplete="current-password" placeholder="Your password" />
            </div>
            <Button className="w-full" asChild>
              <Link href="/app/dashboard">Sign in</Link>
            </Button>
            <p className="text-center text-sm text-slate-500">
              New here? <Link className="font-medium text-orange-600" href="/sign-up">Create an account</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function SignUpView() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.10),transparent_32%),linear-gradient(180deg,#f7f8ff_0%,#ffffff_60%)] px-6 py-12">
        <Card className="w-full max-w-md p-7 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">Create account</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Start a new initiative workspace</h2>
          <div className="mt-6 space-y-4">
            <Input aria-label="Full name" autoComplete="name" placeholder="Full name" />
            <Input aria-label="Work email" type="email" autoComplete="email" placeholder="Work email" />
            <Input aria-label="Workspace name" placeholder="Workspace name" />
            <Button className="w-full" asChild>
              <Link href="/leader/dashboard">Create workspace</Link>
            </Button>
          </div>
        </Card>
      </div>
      <div className="flex items-center justify-center bg-slate-950 px-6 py-12 text-white">
        <div className="max-w-xl">
          <Badge tone="orange" className="mb-5">For leaders</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Create programs that run themselves.</h1>
          <p className="mt-4 text-base leading-7 text-white/70">Set goals, define rubrics, monitor completion, and build private accountability groups in one place.</p>
        </div>
      </div>
    </div>
  );
}

function InitiativeCard({ initiative }: { initiative: Initiative }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className={cn("min-h-[236px] bg-gradient-to-br p-5", initiative.color)}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge tone={initiative.accent.includes("green") ? "green" : "orange"}>{initiative.category}</Badge>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{initiative.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{initiative.description}</p>
          </div>
          <Badge tone="slate">{initiative.privacy}</Badge>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <InlineStat label="Members" value={initiative.members.toString()} />
          <InlineStat label="Difficulty" value={initiative.difficulty} />
          <InlineStat label="Duration" value={initiative.duration} />
          <InlineStat label="Completion" value={formatPercent(initiative.completionRate)} />
        </div>
      </div>
      <div className="mt-auto space-y-3 p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Popularity</span>
          <span className="font-medium text-slate-950">{initiative.rating.toFixed(1)} / 5</span>
        </div>
        <Progress value={initiative.completionRate} />
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Leader: {initiative.owner}</span>
          <Link href={`/app/initiatives/${initiative.id}`} className="inline-flex items-center gap-1 font-medium text-orange-600">
            Explore
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export function StudentWorkspace({ slug }: { slug: string[] }) {
  const section = slug[0] ?? "dashboard";
  const initiative = initiatives[0];

  if (section === "initiatives") {
    if (slug.length > 1) {
      return <DetailInitiative initiative={initiatives.find((item) => item.id === slug[1]) ?? initiatives[0]} role="student" />;
    }

    return (
      <div className="space-y-8">
        <HeroHeader
          title="Discover initiatives that match how you want to grow."
          subtitle="Browse public initiatives, filter by skill and difficulty, and join accountability spaces that fit your goals."
          actions={
            <>
              <Button variant="outline" asChild><Link href="/app/initiatives">Browse all</Link></Button>
              <Button asChild><Link href="/app/initiatives#recommended">Join an initiative</Link></Button>
            </>
          }
        />
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <div className="flex flex-wrap gap-2">
              {["Skill", "Difficulty", "Duration", "Category", "Frequency"].map((item) => (
                <Badge key={item} tone="slate">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {initiatives.map((item) => (
                <InitiativeCard key={item.id} initiative={item} />
              ))}
            </div>
          </Card>
          <div className="space-y-5">
            <Card id="recommended" className="p-5">
              <p className="text-sm font-medium text-slate-950">Recommended for you</p>
              <div className="mt-4 space-y-3">
                {initiatives.slice(0, 3).map((item) => (
                  <MiniInitiative key={item.id} item={item} />
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <p className="text-sm font-medium text-slate-950">My initiatives</p>
              <div className="mt-4 space-y-3">
                {groups.map((group) => (
                  <div key={group.id} className="rounded-2xl border border-slate-200 p-4">
                    <p className="font-medium text-slate-950">{group.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{group.members} members | Rank #{group.leaderboardRank}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (section === "tasks") {
    if (slug.length > 1) {
      return <TaskDetail taskId={slug[1]} />;
    }
    return (
      <div className="space-y-8">
        <HeroHeader title="Tasks" subtitle="Track what needs to be done today, this week, and across each initiative." />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-5">
            <SectionHeader title="Today's tasks" description="Your current focus items across active initiatives." />
            <div className="mt-5 space-y-4">
              {activeTasks.map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <SectionHeader title="Submission types" description="TaskMesh supports multiple output formats." />
            <div className="mt-5 space-y-3">
              {[
                ["Code", "Repository links, snippets, and coding exercises"],
                ["Audio", "Voice notes, spoken explanations, and interviews"],
                ["Video", "Screen recordings and presentation uploads"],
                ["Text", "Reflections, answers, and written submissions"],
                ["File", "Documents, PDFs, and slide decks"]
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-medium text-slate-950">{title}</p>
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (section === "submissions") {
    if (slug.length > 1) return <SubmissionDetail submissionId={slug[1]} />;
    return <SubmissionsPage />;
  }

  if (section === "evaluation") {
    return <EvaluationPage submissionId={slug[1] ?? "sub-01"} />;
  }

  if (section === "progress") {
    return <ProgressPage />;
  }

  if (section === "leaderboard") {
    return <LeaderboardPage />;
  }

  if (section === "groups") {
    if (slug.length > 1) return <GroupDetail groupId={slug[1]} />;
    return <GroupsPage />;
  }

  if (section === "notifications") {
    return <NotificationsPage />;
  }

  if (section === "profile") {
    return <ProfilePage />;
  }

  if (section === "settings") {
    return <SettingsPage role="student" />;
  }

  return <DashboardPage role="student" />;
}

function MiniInitiative({ item }: { item: Initiative }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
      <div>
        <p className="font-medium text-slate-950">{item.title}</p>
        <p className="mt-1 text-sm text-slate-500">{item.skill} | {item.taskFrequency}</p>
      </div>
      <Link href={`/app/initiatives/${item.id}`} className="text-sm font-medium text-orange-600">
        Open
      </Link>
    </div>
  );
}

function TaskRow({ task }: { task: (typeof activeTasks)[number] }) {
  return (
    <div className="rounded-3xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge tone={task.status === "Submitted" ? "green" : task.status === "Pending" ? "slate" : "orange"}>{task.status}</Badge>
            <Badge tone="orange">{task.difficulty}</Badge>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">{task.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{task.description}</p>
        </div>
        <Link href={`/app/tasks/${task.id}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm text-white">
          Continue
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <InlineStat label="Due" value={task.dueLabel} />
        <InlineStat label="Progress" value={formatPercent(task.progress)} />
        <InlineStat label="Accepted types" value={task.submissionType.join(", ")} />
      </div>
    </div>
  );
}

export function DashboardPage({ role }: { role?: "student" | "leader" }) {
  const activeRole = role ?? "student";

  if (activeRole === "leader") {
    return <LeaderDashboard />;
  }

  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader
        title={`${currentStudent.headline}.`}
        subtitle={currentStudent.subtitle}
        actions={
          <>
            <Button variant="outline" asChild><Link href="/app/tasks">Today&apos;s plan</Link></Button>
            <Button asChild><Link href={`/app/tasks/${todayTask.id}`}>Continue task</Link></Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Current streak" value="12 days" delta="+3" tone="orange" />
        <MetricCard label="Weekly consistency" value="86%" delta="+7%" tone="green" />
        <MetricCard label="Average score" value="87" delta="+4" />
        <MetricCard label="Leaderboard rank" value="#08" delta="+2" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-0">
          <div className="border-b border-slate-200 p-5">
            <SectionHeader
              eyebrow="Today"
              title="Today's task"
              description={todayTask.description}
              action={<Badge tone="orange">{todayTask.difficulty}</Badge>}
            />
          </div>
          <div className="space-y-5 p-5">
            <div className="grid gap-3 md:grid-cols-4">
              <InlineStat label="Initiative" value="30 Days of DSA" />
              <InlineStat label="Due" value={todayTask.dueLabel} />
              <InlineStat label="Status" value={todayTask.status} />
              <InlineStat label="Submission" value={todayTask.submissionType.join(", ")} />
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-950">{todayTask.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{todayTask.description}</p>
                </div>
                <Badge tone="green">{todayTask.progress}% complete</Badge>
              </div>
              <Progress value={todayTask.progress} className="mt-4" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild><Link href={`/app/tasks/${todayTask.id}`}>Continue task</Link></Button>
              <Button variant="outline" asChild><Link href={`/app/tasks/${todayTask.id}#rubric`}>View rubric</Link></Button>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <SectionHeader eyebrow="Momentum" title="Recent feedback" description="AI evaluation in a structured, human-readable format." />
          <div className="mt-5 space-y-4">
            {feedback.map((item) => (
              <div key={item.id} className="rounded-3xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={currentStudent.name} />
                    <div>
                      <p className="font-medium text-slate-950">{item.summary.slice(0, 42)}...</p>
              <p className="text-sm text-slate-500">Score {item.score} | {item.tone}</p>
                    </div>
                  </div>
                  <Link href={`/app/evaluation/${item.submissionId}`} className="text-sm font-medium text-orange-600">Open</Link>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <MiniLineChart data={progressData} />
        <HorizontalBars data={skillScores} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-5">
          <SectionHeader eyebrow="Active initiatives" title="Continue where your momentum is strongest." />
          <div className="mt-5 space-y-3">
            {initiatives.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-950">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.members} members | {item.streakLeader} leads the streaks</p>
                </div>
                <div className="w-40">
                  <Progress value={item.completionRate} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <SectionHeader eyebrow="Leaderboard" title="You're close to the top ten." />
          <div className="mt-5 space-y-3">
            {leaderboard.map((entry) => (
              <div key={entry.rank} className={cn("flex items-center justify-between rounded-2xl border p-4", entry.name === currentStudent.name ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200")}>
                <div className="flex items-center gap-3">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-2xl font-semibold", entry.name === currentStudent.name ? "bg-white text-slate-950" : "bg-slate-100 text-slate-700")}>{entry.avatar}</div>
                  <div>
                    <p className="font-medium">{entry.name}</p>
                    <p className={cn("text-sm", entry.name === currentStudent.name ? "text-white/70" : "text-slate-500")}>{entry.initiative}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{entry.score}</p>
                  <p className={cn("text-sm", entry.name === currentStudent.name ? "text-white/70" : "text-slate-500")}>{entry.streak} day streak</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function DetailInitiative({ initiative, role }: { initiative: Initiative; role: "student" | "leader" }) {
  const [joined, setJoined] = useState(false);
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader
        title={initiative.title}
        subtitle={initiative.description}
        actions={
          <>
            <Badge tone={initiative.privacy === "Private" ? "slate" : "green"}>{initiative.privacy}</Badge>
            {role === "student" ? <Button variant={joined ? "success" : "primary"} onClick={() => setJoined(true)}>{joined ? "Joined" : "Join initiative"}</Button> : <Button asChild><Link href={`/leader/initiatives/${initiative.id}/analytics`}>View analytics</Link></Button>}
          </>
        }
      />
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Goal</p>
              <p className="mt-1 text-2xl font-semibold text-slate-950">{initiative.goal}</p>
            </div>
            <Badge tone="orange">{initiative.stage}</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <InlineStat label="Skill" value={initiative.skill} />
            <InlineStat label="Frequency" value={initiative.taskFrequency} />
            <InlineStat label="Members" value={initiative.members.toString()} />
          </div>
          <div className="mt-6">
            <Progress value={initiative.completionRate} />
            <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
              <span>{initiative.completionRate}% completion</span>
              <span>{initiative.activeMembers} active this week</span>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <p className="text-sm font-medium text-slate-950">{role === "student" ? "Why this fits you" : "Management snapshot"}</p>
          <div className="mt-4 space-y-3">
            {[
              "Clear task rhythm with daily completion signals",
              "AI feedback turns submissions into actionable tips",
              "Leaderboard energy keeps practice visible",
              "Private groups support small cohort accountability"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function TaskDetail({ taskId }: { taskId: string }) {
  const task = activeTasks.find((item) => item.id === taskId) ?? activeTasks[0];
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState("");
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader
        title={task.title}
        subtitle={task.description}
        actions={
          <>
            <Badge tone="orange">{task.difficulty}</Badge>
            <Button onClick={() => document.getElementById("submission")?.scrollIntoView({ behavior: "smooth" })}>Submit work</Button>
          </>
        }
      />
      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-5">
          <SectionHeader eyebrow="Task" title="Task details" description="Complete the task in the format that fits best." />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <InlineStat label="Due" value={task.due} />
            <InlineStat label="Progress" value={formatPercent(task.progress)} />
            <InlineStat label="Submission types" value={task.submissionType.join(" / ")} />
            <InlineStat label="Status" value={task.status} />
          </div>
          <div id="rubric" className="mt-5 rounded-3xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-950">Rubric</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {task.rubric.map((item) => (
                <Badge key={item} tone="slate">{item}</Badge>
              ))}
            </div>
          </div>
        </Card>
        <Card id="submission" className="p-5">
          <p className="text-sm font-medium text-slate-950">Submission area</p>
          {submitted ? <SubmissionProcessing task={task} /> : <div className="mt-4 space-y-3">
            <label className="sr-only" htmlFor="submission-content">Your submission</label>
            <textarea id="submission-content" value={content} onChange={(event) => setContent(event.target.value)} className="min-h-[140px] w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100" placeholder="Paste your code, link, or reflection here..." />
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50 focus-within:ring-2 focus-within:ring-indigo-500/50"><input type="file" className="sr-only" aria-label="Attach a file" />Attach file</label>
              <Button onClick={() => setSubmitted(true)} disabled={!content.trim()}>Submit for evaluation</Button>
            </div>
            <p className="text-xs text-slate-500">Your submission is scored against {task.rubric.length} rubric signals.</p>
          </div>}
        </Card>
      </div>
    </div>
  );
}

function SubmissionProcessing({ task }: { task: (typeof activeTasks)[number] }) {
  const steps = ["Preparing submission", "Analyzing content", "Applying evaluation rubric", "Generating personalized feedback", "Evaluation complete"];
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setStep((current) => Math.min(current + 1, steps.length - 1)), 850);
    return () => window.clearInterval(timer);
  }, [steps.length]);
  const complete = step === steps.length - 1;
  return <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 taskmesh-enter">
    <div className="flex items-start gap-3">
      <div className={cn("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full", complete ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700")}>
        {complete ? <CheckCircle2 className="h-5 w-5" /> : <Sparkles className="h-5 w-5 animate-pulse" />}
      </div>
      <div className="min-w-0 flex-1"><p className="font-medium text-slate-950">{complete ? "Your evaluation is ready" : "AI coach is reviewing your work"}</p><p className="mt-1 text-sm text-slate-500">{complete ? "See your score, strengths, and next steps." : steps[step]}</p></div>
      <span className="text-sm font-semibold text-slate-700">{complete ? "100%" : `${Math.round(((step + 1) / steps.length) * 100)}%`}</span>
    </div>
    <Progress value={((step + 1) / steps.length) * 100} className="mt-5" />
    <div className="mt-5 space-y-2">{steps.map((label, index) => <div key={label} className="flex items-center gap-2 text-sm"><span className={cn("h-2 w-2 rounded-full", index <= step ? "bg-green-500" : "bg-slate-200")} /><span className={index <= step ? "text-slate-700" : "text-slate-400"}>{label}</span></div>)}</div>
    {complete ? <Button className="mt-5 w-full" asChild><Link href={`/app/evaluation/${submissions[0].id}`}>View feedback</Link></Button> : <p className="mt-5 text-xs text-slate-500">{task.title} is safely queued. You can leave this page.</p>}
  </div>;
}

export function SubmissionsPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Submissions" subtitle="Review work status, submission type, and evaluation progress." />
      <Card className="p-5">
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge tone={submission.status === "Evaluated" ? "green" : "orange"}>{submission.status}</Badge>
                  <Badge tone="slate">{submission.channel}</Badge>
                </div>
                <p className="mt-3 font-medium text-slate-950">{submission.title}</p>
                <p className="mt-1 text-sm text-slate-500">Submitted {submission.submittedAt} | {submission.reviewer}</p>
              </div>
              <Link href={`/app/submissions/${submission.id}`} className="text-sm font-medium text-orange-600">
                Review
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function SubmissionDetail({ submissionId }: { submissionId: string }) {
  const submission = submissions.find((item) => item.id === submissionId) ?? submissions[0];
  const fb = feedback.find((item) => item.submissionId === submission.id) ?? feedback[0];
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={submission.title} subtitle={`Submission status: ${submission.status}.`} />
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-5">
          <SectionHeader eyebrow="Submission" title="Status and metadata" />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <InlineStat label="Submitted" value={submission.submittedAt} />
            <InlineStat label="Channel" value={submission.channel} />
            <InlineStat label="Reviewer" value={submission.reviewer} />
            <InlineStat label="Score" value={submission.score ? submission.score.toString() : "Pending"} />
          </div>
        </Card>
        <Card className="p-5">
          <SectionHeader eyebrow="Feedback" title="AI evaluation snapshot" />
          <p className="mt-4 text-sm leading-7 text-slate-600">{fb.summary}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Card className="bg-slate-50 p-4 shadow-none">
              <p className="text-sm font-medium text-slate-950">Strengths</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {fb.strengths.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </Card>
            <Card className="bg-slate-50 p-4 shadow-none">
              <p className="text-sm font-medium text-slate-950">Improve next</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {fb.improvements.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function EvaluationPage({ submissionId }: { submissionId: string }) {
  const fb = feedback.find((item) => item.submissionId === submissionId) ?? feedback[0];
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 180);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Evaluation" subtitle="Detailed AI review with scoring, strengths, and actionable tips." />
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Score</p>
              <p className={cn("mt-2 text-5xl font-semibold text-slate-950 transition-all duration-700", visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")}>{fb.score}</p>
            </div>
            <Badge tone="green">{fb.tone}</Badge>
          </div>
          <div className="mt-6">
            <Progress value={fb.score} />
          </div>
          <div className="mt-6 space-y-3">
            {fb.tips.map((tip) => (
              <div key={tip} className="rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-700">{tip}</div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <p className="text-sm font-medium text-slate-950">What the AI noticed</p>
          <div className="mt-4 space-y-4">
            {fb.strengths.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
            {fb.improvements.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <Zap className="mt-0.5 h-4 w-4 text-amber-600" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function ProgressPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Progress" subtitle="See long-term consistency, trends, and milestones." />
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <MiniLineChart data={progressData} />
        <Card className="p-5">
          <SectionHeader eyebrow="Consistency" title="Weekly consistency" />
          <div className="mt-5 space-y-4">
            {consistencyData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-800">{item.label}</span>
                  <span className="text-slate-500">{item.value}%</span>
                </div>
                <Progress value={item.value} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function LeaderboardPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Leaderboard" subtitle="Competition stays healthy when progress is visible." />
      <Card className="p-5">
        <div className="space-y-3">
          {leaderboard.map((entry) => (
            <div key={entry.rank} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 font-semibold text-slate-700">{entry.rank}</div>
                <Avatar name={entry.name} />
                <div>
                  <p className="font-medium text-slate-950">{entry.name}</p>
                  <p className="text-sm text-slate-500">{entry.initiative}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-950">{entry.score}</p>
                <p className="text-sm text-slate-500">{entry.streak} day streak</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function GroupsPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Groups" subtitle="Private sub-groups for accountability, peer review, and focused cohorts." />
      <div className="grid gap-5 lg:grid-cols-2">
        {groups.map((group) => (
          <Card key={group.id} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">{group.name}</p>
                <p className="mt-1 text-sm text-slate-500">{group.description}</p>
              </div>
              <Badge tone="orange">Rank #{group.leaderboardRank}</Badge>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <InlineStat label="Members" value={group.members.toString()} />
              <InlineStat label="Leaderboard" value={`#${group.leaderboardRank}`} />
              <InlineStat label="Cohort" value={group.initiativeId} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function GroupDetail({ groupId }: { groupId: string }) {
  const group = groups.find((item) => item.id === groupId) ?? groups[0];
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={group.name} subtitle={group.description} />
      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <InlineStat label="Members" value={group.members.toString()} />
          <InlineStat label="Rank" value={`#${group.leaderboardRank}`} />
          <InlineStat label="Initiative" value={group.initiativeId} />
        </div>
      </Card>
    </div>
  );
}

export function NotificationsPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Notifications" subtitle="Feedback, reminders, announcements, and milestone updates in one place." />
      <Card className="p-5">
        <div className="space-y-3">
          {notifications.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-950">{item.title}</p>
                <span className="text-xs text-slate-400">{item.time}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function ProfilePage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={currentStudent.name} subtitle={`${currentStudent.location} | ${currentStudent.plan}`} />
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5">
          <Avatar name={currentStudent.name} className="h-16 w-16 text-lg" />
          <p className="mt-4 text-lg font-semibold text-slate-950">{currentStudent.name}</p>
          <p className="text-sm text-slate-500">Participant profile</p>
        </Card>
        <Card className="p-5">
          <SectionHeader title="Settings snapshot" description="Preferences, notifications, and account controls are ready for deeper configuration." />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <InlineStat label="Notifications" value="Enabled" />
            <InlineStat label="Theme" value="Warm light" />
            <InlineStat label="Language" value="English" />
            <InlineStat label="Timezone" value="IST" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export function SettingsPage({ role }: { role: "student" | "leader" }) {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Settings" subtitle={role === "leader" ? "Manage initiative defaults and workspace preferences." : "Tune your experience and notification preferences."} />
      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <InlineStat label="Role" value={role} />
          <InlineStat label="Theme" value="Warm neutral" />
          <InlineStat label="Email" value="Connected" />
          <InlineStat label="Notifications" value="Daily summary" />
        </div>
      </Card>
    </div>
  );
}

export function LeaderWorkspace({ slug }: { slug: string[] }) {
  const section = slug[0] ?? "dashboard";

  if (section === "initiatives") {
    if (slug.length > 2 && slug[2] === "tasks") return <LeaderInitiativeTasks initiativeId={slug[1]} />;
    if (slug.length > 2 && slug[2] === "members") return <LeaderInitiativeMembers initiativeId={slug[1]} />;
    if (slug.length > 2 && slug[2] === "analytics") return <LeaderInitiativeAnalytics initiativeId={slug[1]} />;
    if (slug.length > 2 && slug[2] === "reports") return <LeaderInitiativeReports initiativeId={slug[1]} />;
    if (slug.length > 1 && slug[1] === "create") return <LeaderCreateInitiative />;
    if (slug.length > 1) return <DetailInitiative initiative={initiatives.find((item) => item.id === slug[1]) ?? initiatives[0]} role="leader" />;
    return <LeaderInitiativesPage />;
  }

  if (section === "groups") return <LeaderGroupsPage />;
  if (section === "notifications") return <LeaderNotificationsPage />;
  if (section === "settings") return <SettingsPage role="leader" />;
  return <DashboardPage role="leader" />;
}

function LeaderDashboard() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader
        title={currentLeader.headline}
        subtitle={currentLeader.subtitle}
        actions={
          <>
            <Button variant="outline" asChild><Link href="/leader/notifications">Send announcement</Link></Button>
            <Button asChild><Link href="/leader/initiatives/create">Create initiative</Link></Button>
          </>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {leaderMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} delta={metric.delta} tone={metric.label === "At-risk members" ? "orange" : "green"} />
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <MiniLineChart data={leaderChart} />
        <Card className="p-5">
          <SectionHeader eyebrow="Groups" title="Private cohort health" />
          <div className="mt-5 space-y-4">
            {leaderGroups.map((group) => (
              <div key={group.name} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-950">{group.name}</p>
                  <Badge tone={group.completion > 85 ? "green" : "orange"}>{group.completion}%</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500">{group.members} members | {group.active} active this week</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function LeaderInitiativesPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Initiatives" subtitle="Manage initiatives, create tasks, inspect members, and review performance." actions={<Button asChild><Link href="/leader/initiatives/create">Create initiative</Link></Button>} />
      <div className="grid gap-5 md:grid-cols-2">
        {initiatives.map((initiative) => (
          <Card key={initiative.id} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">{initiative.title}</p>
                <p className="mt-1 text-sm text-slate-500">{initiative.goal}</p>
              </div>
              <Badge tone={initiative.privacy === "Private" ? "slate" : "green"}>{initiative.privacy}</Badge>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <span>{initiative.members} members</span>
              <span>{initiative.completionRate}% completion</span>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" asChild><Link href={`/leader/initiatives/${initiative.id}`}>Open</Link></Button>
              <Button variant="ghost" asChild><Link href={`/leader/initiatives/${initiative.id}/analytics`}>Analytics</Link></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function LeaderCreateInitiative() {
  const [status, setStatus] = useState<"idle" | "draft" | "published">("idle");
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Create initiative" subtitle="Set the goal, frequency, rubric, and privacy model before inviting participants." />
      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Input aria-label="Initiative title" placeholder="Initiative title" />
          <Input aria-label="Category" placeholder="Category" />
          <Input aria-label="Task frequency" placeholder="Task frequency" />
          <Input aria-label="Privacy" placeholder="Privacy" />
          <Textarea aria-label="Initiative goal" className="md:col-span-2" placeholder="Describe the initiative goal and success criteria" />
        </div>
        <div className="mt-5 flex gap-3">
          <Button onClick={() => setStatus("draft")}>{status === "draft" ? "Draft saved" : "Save draft"}</Button>
          <Button variant="outline" onClick={() => setStatus("published")}>{status === "published" ? "Published" : "Publish"}</Button>
        </div>
        {status !== "idle" ? <p className="mt-3 text-sm text-green-700" role="status">{status === "draft" ? "Your initiative is saved as a draft." : "Your initiative is live and ready for members."}</p> : null}
      </Card>
    </div>
  );
}

function LeaderInitiativeTasks({ initiativeId }: { initiativeId: string }) {
  const initiative = initiatives.find((item) => item.id === initiativeId) ?? initiatives[0];
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={`${initiative.title} tasks`} subtitle="Define the work stream and keep the flow consistent." />
      <Card className="p-5">
        <div className="space-y-4">
          {activeTasks.filter((task) => task.initiativeId === initiative.id).map((task) => (
            <div key={task.id} className="rounded-2xl border border-slate-200 p-4">
              <p className="font-medium text-slate-950">{task.title}</p>
              <p className="mt-1 text-sm text-slate-500">{task.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function LeaderInitiativeMembers({ initiativeId }: { initiativeId: string }) {
  const initiative = initiatives.find((item) => item.id === initiativeId) ?? initiatives[0];
  const memberRows = [
    { name: "Meera", status: "Consistent", streak: 31 },
    { name: "Rahul", status: "At risk", streak: 1 },
    { name: "Aarav", status: "On track", streak: 12 },
    { name: "Nina", status: "Excellent", streak: 22 }
  ];
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={`${initiative.title} members`} subtitle="Monitor participation, streaks, and risk signals." />
      <Card className="p-5">
        <div className="space-y-3">
          {memberRows.map((member) => (
            <div key={member.name} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <Avatar name={member.name} />
                <div>
                  <p className="font-medium text-slate-950">{member.name}</p>
                  <p className="text-sm text-slate-500">{member.status}</p>
                </div>
              </div>
              <Badge tone={member.status === "At risk" ? "orange" : "green"}>{member.streak} day streak</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function LeaderInitiativeAnalytics({ initiativeId }: { initiativeId: string }) {
  const initiative = initiatives.find((item) => item.id === initiativeId) ?? initiatives[0];
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={`${initiative.title} analytics`} subtitle="Review completion, engagement, and skill gaps over time." />
      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <MiniLineChart data={leaderChart} />
        <HorizontalBars data={skillScores} />
      </div>
    </div>
  );
}

function LeaderInitiativeReports({ initiativeId }: { initiativeId: string }) {
  const initiative = initiatives.find((item) => item.id === initiativeId) ?? initiatives[0];
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title={`${initiative.title} reports`} subtitle="Export-ready summaries for stakeholders and the community." />
      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <InlineStat label="Completion" value={`${initiative.completionRate}%`} />
          <InlineStat label="Active members" value={initiative.activeMembers.toString()} />
          <InlineStat label="Risk alerts" value="7" />
        </div>
      </Card>
    </div>
  );
}

function LeaderGroupsPage() {
  return (
    <div className="space-y-8 pb-20 xl:pb-6">
      <HeroHeader title="Groups" subtitle="Manage private pods for focused cohorts and peer reviews." />
      <div className="grid gap-5 lg:grid-cols-2">
        {groups.map((group) => (
          <Card key={group.id} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">{group.name}</p>
                <p className="mt-1 text-sm text-slate-500">{group.description}</p>
              </div>
              <Badge tone="orange">Private</Badge>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <InlineStat label="Members" value={group.members.toString()} />
              <InlineStat label="Rank" value={`#${group.leaderboardRank}`} />
              <InlineStat label="Cohort" value={group.initiativeId} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function LeaderNotificationsPage() {
  return <NotificationsPage />;
}

export function AppRouterFrame({ role, slug }: { role: "student" | "leader"; slug: string[] }) {
  if (role === "leader") return <LeaderWorkspace slug={slug} />;
  return <StudentWorkspace slug={slug} />;
}
