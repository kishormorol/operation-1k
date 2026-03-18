export const TARGET = 1000;
export const TOTAL_WEEKS = 26;
export const START_DATE = '2026-03-18';

export const TYPES = {
  dsa:     { a: '#EF4444', bg: '#2D0A0A', l: 'DSA',    i: '⚡' },
  ml:      { a: '#3B82F6', bg: '#0C1929', l: 'ML',     i: '🧠' },
  llm:     { a: '#A855F7', bg: '#1A0A30', l: 'LLM',    i: '🤖' },
  project: { a: '#10B981', bg: '#05200F', l: 'BUILD',  i: '🔨' },
  review:  { a: '#F59E0B', bg: '#1F1505', l: 'REVIEW', i: '📋' },
  setup:   { a: '#6B7280', bg: '#1a1a1f', l: 'SETUP',  i: '⚙️' },
};

export const WEEKS_DATA = [
  {
    id: 1, title: 'Arrays, Hashing & Python', accent: '#EF4444',
    days: [
      { day: 'Mon', tag: 'NO DRIVE', tasks: [
        { id:'w1m1', text:'LC: Two Sum (Easy)', type:'dsa', link:'https://leetcode.com/problems/two-sum/' },
        { id:'w1m2', text:'LC: Contains Duplicate (Easy)', type:'dsa', link:'https://leetcode.com/problems/contains-duplicate/' },
        { id:'w1m3', text:'LC: Valid Anagram (Easy)', type:'dsa', link:'https://leetcode.com/problems/valid-anagram/' },
        { id:'w1m4', text:'Set up: Python 3.11+, VS Code, virtual env', type:'setup' },
        { id:'w1m5', text:'CS50P Lecture 0: Functions + Variables', type:'ml' },
        { id:'w1m6', text:'Install Git, create GitHub account', type:'setup' },
        { id:'w1m7', text:'GitHub Skills: Introduction to GitHub', type:'project' },
        { id:'w1m8', text:'Create first repo — init, add, commit, push', type:'project' },
      ]},
      { day: 'Tue', tag: 'DRIVE 5-9', tasks: [
        { id:'w1t1', text:'LC: Group Anagrams (Medium)', type:'dsa', link:'https://leetcode.com/problems/group-anagrams/' },
        { id:'w1t2', text:'LC: Top K Frequent Elements (Medium)', type:'dsa', link:'https://leetcode.com/problems/top-k-frequent-elements/' },
        { id:'w1t3', text:'CS50P Lecture 1: Conditionals', type:'ml' },
        { id:'w1t4', text:'Build: CLI expense tracker (JSON)', type:'project' },
        { id:'w1t5', text:'Read: MDN HTTP Overview', type:'llm' },
        { id:'w1t6', text:'First API call with requests', type:'llm' },
      ]},
      { day: 'Wed', tag: 'NO DRIVE', tasks: [
        { id:'w1w1', text:'LC: Product of Array Except Self (Med)', type:'dsa', link:'https://leetcode.com/problems/product-of-array-except-self/' },
        { id:'w1w2', text:'LC: Encode and Decode Strings (Med)', type:'dsa', link:'https://leetcode.com/problems/encode-and-decode-strings/' },
        { id:'w1w3', text:'CS50P Lecture 2: Loops', type:'ml' },
        { id:'w1w4', text:'Python: Lists, Dicts, Sets', type:'ml' },
        { id:'w1w5', text:'Finish expense tracker + push to GitHub', type:'project' },
        { id:'w1w6', text:'Learn Git Branching: first 8 levels', type:'project' },
      ]},
      { day: 'Thu', tag: 'DRIVE 5-9', tasks: [
        { id:'w1h1', text:'LC: Longest Consecutive Sequence (Med)', type:'dsa', link:'https://leetcode.com/problems/longest-consecutive-sequence/' },
        { id:'w1h2', text:'Review: re-solve Product of Array cold', type:'dsa' },
        { id:'w1h3', text:'CS50P Lecture 3: Exceptions', type:'ml' },
        { id:'w1h4', text:'Build: Weather API script', type:'project' },
        { id:'w1h5', text:'REST API Tutorial + env variables', type:'llm' },
      ]},
      { day: 'Fri', tag: 'DRIVE 4-9', tasks: [
        { id:'w1f1', text:'LC: Valid Sudoku (Medium)', type:'dsa', link:'https://leetcode.com/problems/valid-sudoku/' },
        { id:'w1f2', text:'Build: Weather CLI app', type:'project' },
        { id:'w1f3', text:'CS50P Lecture 4: Libraries', type:'ml' },
        { id:'w1f4', text:'WEEKLY RETRO: log hours, push code', type:'review' },
      ]},
      { day: 'Sat', tag: 'DRIVE 12-8', tasks: [
        { id:'w1s1', text:'LC Review: 3 problems timed, no hints', type:'dsa' },
        { id:'w1s2', text:'SQLBolt lessons 1-6', type:'project' },
        { id:'w1s3', text:'Install SQLite, create sample DB', type:'project' },
      ]},
      { day: 'Sun', tag: 'DRIVE 12-8', tasks: [
        { id:'w1u1', text:'LC: re-solve 2 struggled problems', type:'dsa' },
        { id:'w1u2', text:'CS50P Lecture 5: Unit Tests', type:'ml' },
        { id:'w1u3', text:'SQLBolt lessons 7-12 (JOINs)', type:'project' },
        { id:'w1u4', text:'Plan Week 2, push all code', type:'review' },
      ]},
    ],
  },
  {
    id: 2, title: 'Two Pointers, Sliding Window & FastAPI', accent: '#F97316',
    days: [
      { day: 'Mon', tag: 'NO DRIVE', tasks: [
        { id:'w2m1', text:'LC: Valid Palindrome (Easy)', type:'dsa', link:'https://leetcode.com/problems/valid-palindrome/' },
        { id:'w2m2', text:'LC: Two Sum II (Medium)', type:'dsa', link:'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
        { id:'w2m3', text:'LC: 3Sum (Medium)', type:'dsa', link:'https://leetcode.com/problems/3sum/' },
        { id:'w2m4', text:'FastAPI Tutorial: First Steps + Pydantic', type:'project' },
        { id:'w2m5', text:'Build: TODO API (GET, POST)', type:'project' },
      ]},
      { day: 'Tue', tag: 'DRIVE 5-9', tasks: [
        { id:'w2t1', text:'LC: Container With Most Water (Med)', type:'dsa', link:'https://leetcode.com/problems/container-with-most-water/' },
        { id:'w2t2', text:'LC: Best Time Buy/Sell Stock (Easy)', type:'dsa', link:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
        { id:'w2t3', text:'Pandas: 10 Minutes to Pandas', type:'ml' },
        { id:'w2t4', text:'TODO API: PUT, DELETE, errors', type:'project' },
        { id:'w2t5', text:'fast.ai Lesson 1', type:'ml' },
      ]},
      { day: 'Wed', tag: 'NO DRIVE', tasks: [
        { id:'w2w1', text:'LC: Longest Substring No Repeat (Med)', type:'dsa', link:'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
        { id:'w2w2', text:'LC: Longest Repeating Char Replace (Med)', type:'dsa', link:'https://leetcode.com/problems/longest-repeating-character-replacement/' },
        { id:'w2w3', text:'Kaggle Pandas: Lessons 1-3', type:'ml' },
        { id:'w2w4', text:'Add SQLite to TODO app', type:'project' },
        { id:'w2w5', text:'fast.ai Lesson 1 finish', type:'ml' },
      ]},
      { day: 'Thu', tag: 'DRIVE 5-9', tasks: [
        { id:'w2h1', text:'LC: Min Window Substring (Hard!)', type:'dsa', link:'https://leetcode.com/problems/minimum-window-substring/' },
        { id:'w2h2', text:'Kaggle Pandas: Lessons 4-5', type:'ml' },
        { id:'w2h3', text:'Polish TODO API + push GitHub', type:'project' },
        { id:'w2h4', text:'Python async/await deep dive', type:'llm' },
      ]},
      { day: 'Fri', tag: 'DRIVE 4-9', tasks: [
        { id:'w2f1', text:'LC: Permutation in String (Med)', type:'dsa', link:'https://leetcode.com/problems/permutation-in-string/' },
        { id:'w2f2', text:'TODO API /stats endpoint', type:'project' },
        { id:'w2f3', text:'WEEKLY RETRO', type:'review' },
      ]},
      { day: 'Sat', tag: 'DRIVE 12-8', tasks: [
        { id:'w2s1', text:'LC Review: 3Sum + Longest Substr timed', type:'dsa' },
        { id:'w2s2', text:'LC: Trapping Rain Water (Hard)', type:'dsa', link:'https://leetcode.com/problems/trapping-rain-water/' },
        { id:'w2s3', text:'Deploy TODO API + fast.ai L2', type:'project' },
      ]},
      { day: 'Sun', tag: 'DRIVE 12-8', tasks: [
        { id:'w2u1', text:'Drill Two Pointer/Sliding Window', type:'dsa' },
        { id:'w2u2', text:'fast.ai Lesson 2: SGD from scratch', type:'ml' },
        { id:'w2u3', text:'Add tests + plan Week 3', type:'review' },
      ]},
    ],
  },
  {
    id: 3, title: 'Binary Search, Stack & First LLM Call', accent: '#10B981',
    days: [
      { day: 'Mon', tag: 'NO DRIVE', tasks: [
        { id:'w3m1', text:'LC: Binary Search (Easy)', type:'dsa', link:'https://leetcode.com/problems/binary-search/' },
        { id:'w3m2', text:'LC: Search a 2D Matrix (Med)', type:'dsa', link:'https://leetcode.com/problems/search-a-2d-matrix/' },
        { id:'w3m3', text:'LC: Koko Eating Bananas (Med)', type:'dsa', link:'https://leetcode.com/problems/koko-eating-bananas/' },
        { id:'w3m4', text:'Karpathy Ep 1: Micrograd', type:'ml' },
        { id:'w3m5', text:'Sign up OpenAI + Anthropic APIs', type:'setup' },
        { id:'w3m6', text:'First LLM API call!', type:'llm' },
        { id:'w3m7', text:'Build: terminal chatbot', type:'project' },
      ]},
      { day: 'Tue', tag: 'DRIVE 5-9', tasks: [
        { id:'w3t1', text:'LC: Search Rotated Array (Med)', type:'dsa', link:'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
        { id:'w3t2', text:'LC: Time Based KV Store (Med)', type:'dsa', link:'https://leetcode.com/problems/time-based-key-value-store/' },
        { id:'w3t3', text:'Karpathy Micrograd finish', type:'ml' },
        { id:'w3t4', text:'Chatbot: add conversation history', type:'project' },
        { id:'w3t5', text:'Anthropic Prompt Tutorial Ch 1-3', type:'llm' },
      ]},
      { day: 'Wed', tag: 'NO DRIVE', tasks: [
        { id:'w3w1', text:'LC: Valid Parentheses (Easy)', type:'dsa', link:'https://leetcode.com/problems/valid-parentheses/' },
        { id:'w3w2', text:'LC: Min Stack (Medium)', type:'dsa', link:'https://leetcode.com/problems/min-stack/' },
        { id:'w3w3', text:'LC: Evaluate RPN (Medium)', type:'dsa', link:'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
        { id:'w3w4', text:'Anthropic Prompt Tutorial Ch 4-9', type:'llm' },
        { id:'w3w5', text:'Build: prompt tester (5 variants)', type:'project' },
      ]},
      { day: 'Thu', tag: 'DRIVE 5-9', tasks: [
        { id:'w3h1', text:'LC: Generate Parentheses (Med)', type:'dsa', link:'https://leetcode.com/problems/generate-parentheses/' },
        { id:'w3h2', text:'LC: Daily Temperatures (Med)', type:'dsa', link:'https://leetcode.com/problems/daily-temperatures/' },
        { id:'w3h3', text:'OpenAI Prompt Engineering Guide', type:'llm' },
        { id:'w3h4', text:'Build: document summarizer (CoT)', type:'project' },
        { id:'w3h5', text:'Token counting with tiktoken', type:'llm' },
      ]},
      { day: 'Fri', tag: 'DRIVE 4-9', tasks: [
        { id:'w3f1', text:'LC: Car Fleet (Medium)', type:'dsa', link:'https://leetcode.com/problems/car-fleet/' },
        { id:'w3f2', text:'Add streaming to chatbot', type:'llm' },
        { id:'w3f3', text:'Study pricing pages', type:'llm' },
        { id:'w3f4', text:'WEEKLY RETRO', type:'review' },
      ]},
      { day: 'Sat', tag: 'DRIVE 12-8', tasks: [
        { id:'w3s1', text:'LC: Largest Rectangle (Hard)', type:'dsa', link:'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
        { id:'w3s2', text:'Build: FastAPI + LLM endpoint', type:'project' },
      ]},
      { day: 'Sun', tag: 'DRIVE 12-8', tasks: [
        { id:'w3u1', text:'Drill weakest pattern: 3 probs', type:'dsa' },
        { id:'w3u2', text:'Karpathy Ep 2: Makemore', type:'ml' },
        { id:'w3u3', text:'Polish FastAPI+LLM + plan W4', type:'review' },
      ]},
    ],
  },
  {
    id: 4, title: 'Linked Lists, Trees & Tool Calling', accent: '#A855F7',
    days: [
      { day: 'Mon', tag: 'NO DRIVE', tasks: [
        { id:'w4m1', text:'LC: Reverse Linked List (Easy)', type:'dsa', link:'https://leetcode.com/problems/reverse-linked-list/' },
        { id:'w4m2', text:'LC: Merge Two Sorted Lists (Easy)', type:'dsa', link:'https://leetcode.com/problems/merge-two-sorted-lists/' },
        { id:'w4m3', text:'LC: Linked List Cycle (Easy)', type:'dsa', link:'https://leetcode.com/problems/linked-list-cycle/' },
        { id:'w4m4', text:'Karpathy Ep 2 finish', type:'ml' },
        { id:'w4m5', text:'OpenAI Structured Outputs Guide', type:'llm' },
        { id:'w4m6', text:'Build: invoice parser + Instructor', type:'project' },
      ]},
      { day: 'Tue', tag: 'DRIVE 5-9', tasks: [
        { id:'w4t1', text:'LC: Reorder List (Medium)', type:'dsa', link:'https://leetcode.com/problems/reorder-list/' },
        { id:'w4t2', text:'LC: Remove Nth From End (Med)', type:'dsa', link:'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
        { id:'w4t3', text:'Pydantic deep dive', type:'llm' },
        { id:'w4t4', text:'Build: structured data extractor', type:'project' },
        { id:'w4t5', text:'Function Calling + Tool Use docs', type:'llm' },
      ]},
      { day: 'Wed', tag: 'NO DRIVE', tasks: [
        { id:'w4w1', text:'LC: Invert Binary Tree (Easy)', type:'dsa', link:'https://leetcode.com/problems/invert-binary-tree/' },
        { id:'w4w2', text:'LC: Max Depth Binary Tree (Easy)', type:'dsa', link:'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
        { id:'w4w3', text:'LC: Same Tree (Easy)', type:'dsa', link:'https://leetcode.com/problems/same-tree/' },
        { id:'w4w4', text:'LC: Subtree of Another Tree (Easy)', type:'dsa', link:'https://leetcode.com/problems/subtree-of-another-tree/' },
        { id:'w4w5', text:'Karpathy Ep 3: MLP', type:'ml' },
        { id:'w4w6', text:'BUILD: 3-tool assistant + wire loop', type:'project' },
      ]},
      { day: 'Thu', tag: 'DRIVE 5-9', tasks: [
        { id:'w4h1', text:'LC: LCA of BST (Medium)', type:'dsa', link:'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
        { id:'w4h2', text:'LC: Level Order Traversal (Med)', type:'dsa', link:'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
        { id:'w4h3', text:'Karpathy Ep 3 finish', type:'ml' },
        { id:'w4h4', text:'Add database tool + multi-turn', type:'project' },
      ]},
      { day: 'Fri', tag: 'DRIVE 4-9', tasks: [
        { id:'w4f1', text:'LC: Validate BST (Medium)', type:'dsa', link:'https://leetcode.com/problems/validate-binary-search-tree/' },
        { id:'w4f2', text:'Add streaming + Tenacity retries', type:'project' },
        { id:'w4f3', text:'MONTH 1 RETRO', type:'review' },
      ]},
      { day: 'Sat', tag: 'DRIVE 12-8', tasks: [
        { id:'w4s1', text:'LC: LRU Cache (Medium) — classic!', type:'dsa', link:'https://leetcode.com/problems/lru-cache/' },
        { id:'w4s2', text:'Polish assistant + README', type:'project' },
        { id:'w4s3', text:'fast.ai Lesson 3', type:'ml' },
      ]},
      { day: 'Sun', tag: 'DRIVE 12-8', tasks: [
        { id:'w4u1', text:'Drill WEAKEST: 3 probs any week', type:'dsa' },
        { id:'w4u2', text:'Deploy assistant as FastAPI', type:'project' },
        { id:'w4u3', text:'FINAL: clean all repos + READMEs', type:'review' },
      ]},
    ],
  },
];

export const ROUTINE = {
  Mon: [
    {t:'7:30',l:'Wake · Breakfast',c:'#333'},{t:'8:00',l:'GYM (1.5h)',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode (2.5h)',c:'#EF4444'},{t:'12:00',l:'ML/LLM (1.25h)',c:'#3B82F6'},
    {t:'1:30',l:'Commute to class',c:'#52525B'},{t:'3:00',l:'Study',c:'#3B82F6'},
    {t:'5:00',l:'CLASS',c:'#FBBF24'},{t:'6:20',l:'Commute back',c:'#52525B'},
    {t:'8:00',l:'Dinner',c:'#333'},{t:'8:20',l:'★ DEEP BUILD (3h)',c:'#10B981'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'Light review',c:'#EF4444'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
  Tue: [
    {t:'7:30',l:'Wake · Breakfast',c:'#333'},{t:'8:00',l:'GYM (1.5h)',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode (2.25h)',c:'#EF4444'},{t:'11:45',l:'ML (30m)',c:'#3B82F6'},
    {t:'12:30',l:'CLASS',c:'#FBBF24'},{t:'1:50',l:'Commute + Lunch',c:'#52525B'},
    {t:'3:00',l:'BUILD (1.75h)',c:'#10B981'},{t:'5:00',l:'DRIVE (4h)',c:'#FB7185'},
    {t:'9:00',l:'Dinner',c:'#333'},{t:'9:20',l:'LLM + Build (2h)',c:'#A855F7'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'LC review',c:'#EF4444'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
  Wed: [
    {t:'7:30',l:'Wake · Breakfast',c:'#333'},{t:'8:00',l:'GYM (1.5h)',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode (2.5h)',c:'#EF4444'},{t:'12:00',l:'ML/LLM (1.25h)',c:'#3B82F6'},
    {t:'1:30',l:'Commute to class',c:'#52525B'},{t:'3:00',l:'Study',c:'#3B82F6'},
    {t:'5:00',l:'CLASS',c:'#FBBF24'},{t:'6:20',l:'Commute back',c:'#52525B'},
    {t:'8:00',l:'Dinner',c:'#333'},{t:'8:20',l:'★ DEEP BUILD (3h)',c:'#10B981'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'Light review',c:'#EF4444'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
  Thu: [
    {t:'7:30',l:'Wake · Breakfast',c:'#333'},{t:'8:00',l:'GYM (1.5h)',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode (2.25h)',c:'#EF4444'},{t:'11:45',l:'ML (30m)',c:'#3B82F6'},
    {t:'12:30',l:'CLASS',c:'#FBBF24'},{t:'1:50',l:'Commute + Lunch',c:'#52525B'},
    {t:'3:00',l:'BUILD (1.75h)',c:'#10B981'},{t:'5:00',l:'DRIVE (4h)',c:'#FB7185'},
    {t:'9:00',l:'Dinner',c:'#333'},{t:'9:20',l:'LLM + Build (2h)',c:'#A855F7'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'LC review',c:'#EF4444'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
  Fri: [
    {t:'7:30',l:'Wake · Breakfast',c:'#333'},{t:'8:00',l:'GYM (1.5h)',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode (1.25h)',c:'#EF4444'},{t:'11:00',l:'CLASS (3h)',c:'#FBBF24'},
    {t:'2:00',l:'Lunch',c:'#333'},{t:'2:15',l:'Build + ML (1.5h)',c:'#10B981'},
    {t:'4:00',l:'DRIVE (5h)',c:'#FB7185'},{t:'9:00',l:'Dinner',c:'#333'},
    {t:'9:20',l:'Retro + LLM (2h)',c:'#A855F7'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'Reading',c:'#3B82F6'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
  Sat: [
    {t:'7:30',l:'Wake · Big breakfast',c:'#333'},{t:'8:00',l:'GYM — go hard',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode DEEP (2.25h)',c:'#EF4444'},
    {t:'12:00',l:'DRIVE (8h)',c:'#FB7185'},{t:'8:00p',l:'Dinner',c:'#333'},
    {t:'8:20',l:'Build + LLM (3h)',c:'#10B981'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'Light review',c:'#EF4444'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
  Sun: [
    {t:'7:30',l:'Wake',c:'#333'},{t:'8:00',l:'GYM',c:'#F59E0B'},
    {t:'9:30',l:'LeetCode drill (2.25h)',c:'#EF4444'},
    {t:'12:00',l:'DRIVE (8h)',c:'#FB7185'},{t:'8:00p',l:'Dinner',c:'#333'},
    {t:'8:20',l:'Plan + Build (3h)',c:'#10B981'},
    {t:'11:30',l:'WALK',c:'#06B6D4'},{t:'12:00',l:'Reading',c:'#3B82F6'},{t:'12:30',l:'Sleep',c:'#222'},
  ],
};
