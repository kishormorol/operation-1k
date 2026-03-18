export const TARGET = 1000;

export const TYPES = {
  dsa:     { a:"#EF4444", bg:"#2D0A0A", l:"DSA",    i:"⚡" },
  ml:      { a:"#3B82F6", bg:"#0C1929", l:"ML",     i:"🧠" },
  llm:     { a:"#A855F7", bg:"#1A0A30", l:"LLM",    i:"🤖" },
  project: { a:"#10B981", bg:"#05200F", l:"BUILD",  i:"🔨" },
  review:  { a:"#F59E0B", bg:"#1F1505", l:"REVIEW", i:"📋" },
  setup:   { a:"#6B7280", bg:"#1a1a1f", l:"SETUP",  i:"⚙️" },
  design:  { a:"#EC4899", bg:"#2D0A1E", l:"DESIGN", i:"🏗️" },
  interview:{a:"#22D3EE", bg:"#051D22", l:"MOCK",   i:"🎯" },
};

// Helper
const lc = (id, text, link) => ({ id, text, type:"dsa", link: `https://leetcode.com/problems/${link}/` });
const ml = (id, text, link) => ({ id, text, type:"ml", ...(link && {link}) });
const llm = (id, text, link) => ({ id, text, type:"llm", ...(link && {link}) });
const build = (id, text, link) => ({ id, text, type:"project", ...(link && {link}) });
const rev = (id, text) => ({ id, text, type:"review" });
const setup = (id, text, link) => ({ id, text, type:"setup", ...(link && {link}) });
const design = (id, text, link) => ({ id, text, type:"design", ...(link && {link}) });
const mock = (id, text, link) => ({ id, text, type:"interview", ...(link && {link}) });

export const WEEKS_DATA = [

  // ============================================================
  // MONTH 1: FOUNDATIONS (W1-W4)
  // ============================================================

  { id:1, title:"Arrays, Hashing & Python Setup", accent:"#EF4444", month:1, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("1m1","LC: Two Sum (Easy)","two-sum"),
      lc("1m2","LC: Contains Duplicate (Easy)","contains-duplicate"),
      lc("1m3","LC: Valid Anagram (Easy)","valid-anagram"),
      setup("1m4","Set up Python 3.11+, VS Code, venv","https://code.visualstudio.com/docs/python/python-tutorial"),
      ml("1m5","CS50P Lecture 0: Functions + Variables","https://cs50.harvard.edu/python/"),
      setup("1m6","Install Git, create GitHub account","https://git-scm.com/book/en/v2"),
      build("1m7","GitHub Skills: Intro to GitHub","https://skills.github.com/"),
      build("1m8","Create first repo — init, add, commit, push","https://learngitbranching.js.org/"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("1t1","LC: Group Anagrams (Medium)","group-anagrams"),
      lc("1t2","LC: Top K Frequent Elements (Medium)","top-k-frequent-elements"),
      ml("1t3","CS50P Lecture 1: Conditionals","https://cs50.harvard.edu/python/"),
      build("1t4","Build: CLI expense tracker (JSON read/write)"),
      llm("1t5","Read: MDN HTTP Overview","https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"),
      llm("1t6","Install requests, first API call","https://requests.readthedocs.io/en/latest/"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("1w1","LC: Product of Array Except Self (Med)","product-of-array-except-self"),
      lc("1w2","LC: Encode and Decode Strings (Med)","encode-and-decode-strings"),
      ml("1w3","CS50P Lecture 2: Loops","https://cs50.harvard.edu/python/"),
      ml("1w4","Python docs: Lists, Dicts, Sets, Tuples","https://docs.python.org/3/tutorial/"),
      build("1w5","Finish expense tracker + error handling"),
      build("1w6","Push to GitHub with clean README"),
      build("1w7","Learn Git Branching: levels 1-8","https://learngitbranching.js.org/"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("1h1","LC: Longest Consecutive Sequence (Med)","longest-consecutive-sequence"),
      lc("1h2","Review: re-solve Product of Array cold","product-of-array-except-self"),
      ml("1h3","CS50P Lecture 3: Exceptions","https://cs50.harvard.edu/python/"),
      build("1h4","Build: Weather script (Open-Meteo API)","https://open-meteo.com/en/docs"),
      llm("1h5","Read: REST API Tutorial","https://restfulapi.net/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("1f1","LC: Valid Sudoku (Medium)","valid-sudoku"),
      build("1f2","Build: Weather CLI app (combine all)"),
      ml("1f3","CS50P Lecture 4: Libraries","https://cs50.harvard.edu/python/"),
      rev("1f4","WEEKLY RETRO: log hours, push code"),
      llm("1f5","Read: Python async/await intro","https://realpython.com/async-io-python/"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("1s1","LC Review: re-solve 3 problems timed","two-sum"),
      build("1s3","SQLBolt lessons 1-6","https://sqlbolt.com/"),
      build("1s4","Install SQLite, create sample DB"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("1u1","LC: re-solve 2 hardest problems cold","group-anagrams"),
      ml("1u2","CS50P Lecture 5: Unit Tests","https://cs50.harvard.edu/python/"),
      build("1u3","SQLBolt lessons 7-12 (JOINs)","https://sqlbolt.com/"),
      rev("1u4","Plan Week 2, push all code"),
    ]},
  ]},

  { id:2, title:"Two Pointers, Sliding Window & FastAPI", accent:"#F97316", month:1, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("2m1","LC: Valid Palindrome (Easy)","valid-palindrome"),
      lc("2m2","LC: Two Sum II (Medium)","two-sum-ii-input-array-is-sorted"),
      lc("2m3","LC: 3Sum (Medium) — classic!","3sum"),
      build("2m4","FastAPI Tutorial: First Steps","https://fastapi.tiangolo.com/tutorial/"),
      build("2m5","FastAPI: Pydantic + Request Body","https://fastapi.tiangolo.com/tutorial/body/"),
      build("2m6","Build: TODO API (GET/POST /todos)"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("2t1","LC: Container With Most Water (Med)","container-with-most-water"),
      lc("2t2","LC: Best Time Buy/Sell Stock (Easy)","best-time-to-buy-and-sell-stock"),
      ml("2t3","Pandas: 10 Minutes to Pandas","https://pandas.pydata.org/docs/user_guide/10min.html"),
      build("2t4","TODO API: add PUT, DELETE, errors"),
      ml("2t5","fast.ai Lesson 1 (first half)","https://course.fast.ai/"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("2w1","LC: Longest Substring No Repeat (Med)","longest-substring-without-repeating-characters"),
      lc("2w2","LC: Longest Repeating Char Replace (Med)","longest-repeating-character-replacement"),
      ml("2w3","Kaggle Pandas: Lessons 1-3","https://www.kaggle.com/learn/pandas"),
      build("2w4","Add SQLite database to TODO app"),
      ml("2w5","fast.ai Lesson 1 (finish)","https://course.fast.ai/"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("2h1","LC: Minimum Window Substring (Hard)!","minimum-window-substring"),
      ml("2h2","Kaggle Pandas: Lessons 4-5","https://www.kaggle.com/learn/pandas"),
      build("2h3","Polish TODO API + push with README"),
      llm("2h4","Python async/await deep dive","https://realpython.com/async-io-python/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("2f1","LC: Permutation in String (Medium)","permutation-in-string"),
      build("2f2","Add /stats endpoint with Pandas"),
      rev("2f3","WEEKLY RETRO"),
      lc("2f4","Re-solve Min Window Substring","minimum-window-substring"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("2s1","Re-solve 3Sum + Longest Substring","3sum"),
      lc("2s2","LC: Trapping Rain Water (Hard)","trapping-rain-water"),
      build("2s3","Deploy TODO with uvicorn","https://fastapi.tiangolo.com/deployment/"),
      ml("2s4","fast.ai Lesson 2: SGD","https://course.fast.ai/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("2u1","Drill 2-3 Two Pointer problems","container-with-most-water"),
      ml("2u2","fast.ai Lesson 2 (finish)","https://course.fast.ai/"),
      build("2u3","Add pytest tests to TODO","https://docs.pytest.org/"),
      rev("2u4","Push all, plan Week 3"),
    ]},
  ]},

  { id:3, title:"Binary Search, Stack & First LLM Call", accent:"#10B981", month:1, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("3m1","LC: Binary Search (Easy)","binary-search"),
      lc("3m2","LC: Search 2D Matrix (Medium)","search-a-2d-matrix"),
      lc("3m3","LC: Koko Eating Bananas (Medium)","koko-eating-bananas"),
      ml("3m4","Karpathy Ep 1: Micrograd (first half)","https://www.youtube.com/watch?v=VMj-3S1tku0"),
      setup("3m5","Sign up OpenAI API","https://platform.openai.com/api-keys"),
      setup("3m6","Sign up Anthropic API","https://console.anthropic.com/"),
      llm("3m7","FIRST LLM API call (OpenAI)","https://platform.openai.com/docs/quickstart"),
      build("3m8","Build: terminal chatbot (10 lines)"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("3t1","LC: Search Rotated Sorted Array (Med)","search-in-rotated-sorted-array"),
      lc("3t2","LC: Time Based KV Store (Medium)","time-based-key-value-store"),
      ml("3t3","Karpathy Micrograd (finish)","https://www.youtube.com/watch?v=VMj-3S1tku0"),
      build("3t4","Chatbot: add conversation history"),
      llm("3t5","Anthropic Prompt Tutorial Ch 1-3","https://github.com/anthropics/prompt-eng-interactive-tutorial"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("3w1","LC: Valid Parentheses (Easy)","valid-parentheses"),
      lc("3w2","LC: Min Stack (Medium)","min-stack"),
      lc("3w3","LC: Evaluate RPN (Medium)","evaluate-reverse-polish-notation"),
      llm("3w4","Anthropic Prompt Tutorial Ch 4-9","https://github.com/anthropics/prompt-eng-interactive-tutorial"),
      build("3w5","Build: prompt tester — 5 variants"),
      build("3w6","Push prompt-tester to GitHub"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("3h1","LC: Generate Parentheses (Medium)","generate-parentheses"),
      lc("3h2","LC: Daily Temperatures (Medium)","daily-temperatures"),
      llm("3h3","OpenAI Prompt Engineering Guide","https://platform.openai.com/docs/guides/prompt-engineering"),
      build("3h4","Build: document summarizer (CoT)"),
      llm("3h5","Token counting with tiktoken","https://github.com/openai/tiktoken"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("3f1","LC: Car Fleet (Medium)","car-fleet"),
      llm("3f2","Add streaming (stream=True)","https://platform.openai.com/docs/api-reference/streaming"),
      llm("3f3","Read: OpenAI + Anthropic pricing","https://openai.com/api/pricing"),
      rev("3f4","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("3s1","LC Review: Binary Search + Stack","binary-search"),
      lc("3s2","LC: Largest Rectangle Histogram (H)","largest-rectangle-in-histogram"),
      build("3s3","Build: FastAPI + LLM streaming endpoint","https://fastapi.tiangolo.com/advanced/custom-response/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("3u1","Drill weakest pattern: 3 timed","valid-parentheses"),
      ml("3u2","Karpathy Ep 2: Makemore (start)","https://www.youtube.com/watch?v=PaCmpygFfXo"),
      build("3u3","Polish FastAPI+LLM: retries","https://tenacity.readthedocs.io/"),
      rev("3u4","Push all, plan Week 4"),
    ]},
  ]},

  { id:4, title:"Linked Lists, Trees & Tool Calling", accent:"#A855F7", month:1, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("4m1","LC: Reverse Linked List (Easy)","reverse-linked-list"),
      lc("4m2","LC: Merge Two Sorted Lists (Easy)","merge-two-sorted-lists"),
      lc("4m3","LC: Linked List Cycle (Easy)","linked-list-cycle"),
      ml("4m4","Karpathy Ep 2: Makemore (finish)","https://www.youtube.com/watch?v=PaCmpygFfXo"),
      llm("4m5","OpenAI Structured Outputs Guide","https://platform.openai.com/docs/guides/structured-outputs"),
      setup("4m6","Install Instructor library","https://python.useinstructor.com/"),
      build("4m7","Build: invoice parser → Pydantic"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("4t1","LC: Reorder List (Medium)","reorder-list"),
      lc("4t2","LC: Remove Nth Node (Medium)","remove-nth-node-from-end-of-list"),
      llm("4t3","Pydantic: models, validators","https://docs.pydantic.dev/latest/"),
      build("4t4","Build: structured data extractor","https://python.useinstructor.com/"),
      llm("4t5","OpenAI Function Calling Guide","https://platform.openai.com/docs/guides/function-calling"),
      llm("4t6","Anthropic Tool Use docs","https://docs.anthropic.com/en/docs/build-with-claude/tool-use"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("4w1","LC: Invert Binary Tree (Easy)","invert-binary-tree"),
      lc("4w2","LC: Max Depth Binary Tree (Easy)","maximum-depth-of-binary-tree"),
      lc("4w3","LC: Same Tree (Easy)","same-tree"),
      lc("4w4","LC: Subtree of Another Tree (Easy)","subtree-of-another-tree"),
      ml("4w5","Karpathy Ep 3: MLP (first half)","https://www.youtube.com/watch?v=TCH_1BHY58I"),
      build("4w6","BUILD: 3-tool assistant","https://github.com/openai/openai-cookbook/blob/main/examples/How_to_call_functions_with_chat_models.ipynb"),
      build("4w7","Wire full tool calling loop"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("4h1","LC: LCA of BST (Medium)","lowest-common-ancestor-of-a-binary-search-tree"),
      lc("4h2","LC: Level Order Traversal (Medium)","binary-tree-level-order-traversal"),
      ml("4h3","Karpathy Ep 3 (finish)","https://www.youtube.com/watch?v=TCH_1BHY58I"),
      build("4h4","Add 4th tool: query_database(sql)"),
      build("4h5","Add multi-turn conversation","https://platform.openai.com/docs/guides/conversation-state"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("4f1","LC: Validate BST (Medium)","validate-binary-search-tree"),
      build("4f2","Add streaming to assistant"),
      llm("4f3","Tenacity: add retry logic","https://tenacity.readthedocs.io/"),
      rev("4f4","WEEKLY RETRO + MONTH 1 REVIEW"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("4s1","LC timed: 1 LL + 1 Tree + 1 old","reorder-list"),
      lc("4s2","LC: LRU Cache (Med) — classic!","lru-cache"),
      build("4s3","Polish assistant + README"),
      ml("4s4","fast.ai Lesson 3: NN Foundations","https://course.fast.ai/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("4u1","Drill WEAKEST pattern: 3 problems","lru-cache"),
      ml("4u2","fast.ai Lesson 3 (continue)","https://course.fast.ai/"),
      build("4u3","Deploy assistant as FastAPI app"),
      rev("4u4","MONTH 1 FINAL: push all, clean READMEs"),
    ]},
  ]},

  // ============================================================
  // MONTH 2: LLM ENGINEERING + HARDER LC (W5-W8)
  // ============================================================

  { id:5, title:"Trees DFS/BFS & Streaming/State", accent:"#EF4444", month:2, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("5m1","LC: Binary Tree Right Side View (Med)","binary-tree-right-side-view"),
      lc("5m2","LC: Count Good Nodes (Medium)","count-good-nodes-in-binary-tree"),
      llm("5m3","OpenAI streaming deep dive","https://platform.openai.com/docs/api-reference/streaming"),
      llm("5m4","Anthropic streaming docs","https://docs.anthropic.com/en/api/messages-streaming"),
      build("5m5","Build: streaming chat UI with FastAPI"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("5t1","LC: Kth Smallest in BST (Medium)","kth-smallest-element-in-a-bst"),
      lc("5t2","LC: Construct from Preorder/Inorder (Med)","construct-binary-tree-from-preorder-and-inorder-traversal"),
      llm("5t3","Conversation state management","https://platform.openai.com/docs/guides/conversation-state"),
      build("5t4","Build: multi-turn chat with history truncation"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("5w1","LC: Binary Tree Max Path Sum (Hard)","binary-tree-maximum-path-sum"),
      lc("5w2","LC: Serialize/Deserialize Tree (Hard)","serialize-and-deserialize-binary-tree"),
      llm("5w3","Cost optimization: model selection","https://openai.com/api/pricing"),
      llm("5w4","Token counting in practice","https://github.com/openai/tiktoken"),
      build("5w5","Add cost tracking to your chat app"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("5h1","LC Review: re-solve 2 tree hards","binary-tree-maximum-path-sum"),
      llm("5h2","Error handling: OpenAI error codes","https://platform.openai.com/docs/guides/error-codes"),
      llm("5h3","Error handling: Anthropic errors","https://docs.anthropic.com/en/api/errors"),
      build("5h4","Add robust error handling to all apps"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("5f1","LC: timed review — 2 mediums","kth-smallest-element-in-a-bst"),
      llm("5f2","Prompt injection awareness","https://genai.owasp.org/llmrisk/llm01-prompt-injection/"),
      rev("5f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("5s1","LC: drill tree DFS/BFS patterns","binary-tree-right-side-view"),
      build("5s2","Polish streaming chat — deploy"),
      ml("5s3","fast.ai Lesson 4: NLP","https://course.fast.ai/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("5u1","Re-solve 3 hardest from W1-W5","serialize-and-deserialize-binary-tree"),
      ml("5u2","fast.ai Lesson 4 (finish)","https://course.fast.ai/"),
      rev("5u3","Push all, plan Week 6"),
    ]},
  ]},

  { id:6, title:"Tries, Heaps & Embeddings Intro", accent:"#F97316", month:2, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("6m1","LC: Implement Trie (Medium)","implement-trie-prefix-tree"),
      lc("6m2","LC: Kth Largest Element (Medium)","kth-largest-element-in-an-array"),
      lc("6m3","LC: Last Stone Weight (Easy)","last-stone-weight"),
      ml("6m4","Embeddings intro: Stack Overflow blog","https://stackoverflow.blog/2023/11/09/an-intuitive-introduction-to-text-embeddings/"),
      llm("6m5","OpenAI Embeddings Guide","https://platform.openai.com/docs/guides/embeddings"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("6t1","LC: K Closest Points (Medium)","k-closest-points-to-origin"),
      lc("6t2","LC: Task Scheduler (Medium)","task-scheduler"),
      build("6t3","Embed 20 sentences, build nearest-neighbor search"),
      ml("6t4","Google ML: Embeddings crash course","https://developers.google.com/machine-learning/crash-course/embeddings"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("6w1","LC: Find Median Data Stream (Hard)","find-median-from-data-stream"),
      lc("6w2","LC: Word Search II (Hard)","word-search-ii"),
      ml("6w3","Chunking strategies for RAG","https://weaviate.io/blog/chunking-strategies-for-rag"),
      build("6w4","Chunk 10 documents with LangChain splitters","https://python.langchain.com/docs/concepts/text_splitters/"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("6h1","LC Review: 2 heap problems timed","task-scheduler"),
      build("6h2","Set up Chroma DB locally","https://docs.trychroma.com/"),
      build("6h3","Index chunked docs into Chroma"),
      llm("6h4","Pinecone learning: vector search","https://www.pinecone.io/learn/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("6f1","LC: timed medium review","implement-trie-prefix-tree"),
      build("6f2","Build: semantic search over your docs"),
      rev("6f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("6s1","Drill tries + heaps","find-median-from-data-stream"),
      build("6s2","Add metadata filtering to Chroma queries"),
      ml("6s3","Karpathy Ep 4: Backprop","https://www.youtube.com/watch?v=q8SA3rM6ckI"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("6u1","Re-solve 2 hards from this week","word-search-ii"),
      ml("6u2","Karpathy Ep 4 (finish)","https://www.youtube.com/watch?v=q8SA3rM6ckI"),
      rev("6u3","Push all, plan Week 7"),
    ]},
  ]},

  { id:7, title:"Backtracking & Vector DBs", accent:"#10B981", month:2, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("7m1","LC: Subsets (Medium)","subsets"),
      lc("7m2","LC: Combination Sum (Medium)","combination-sum"),
      lc("7m3","LC: Permutations (Medium)","permutations"),
      build("7m4","Build: full RAG query pipeline"),
      llm("7m5","LlamaIndex RAG intro","https://developers.llamaindex.ai/python/framework/understanding/rag/"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("7t1","LC: Subsets II (Medium)","subsets-ii"),
      lc("7t2","LC: Combination Sum II (Medium)","combination-sum-ii"),
      build("7t3","LlamaIndex starter tutorial","https://developers.llamaindex.ai/python/framework/getting_started/starter_example/"),
      build("7t4","Build RAG with LlamaIndex (30 lines)"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("7w1","LC: Word Search (Medium)","word-search"),
      lc("7w2","LC: Palindrome Partitioning (Med)","palindrome-partitioning"),
      lc("7w3","LC: Letter Combos Phone (Medium)","letter-combinations-of-a-phone-number"),
      build("7w4","Add reranking to RAG pipeline","https://docs.cohere.com/docs/reranking-with-cohere"),
      build("7w5","Test retrieval quality — compare with/without reranking"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("7h1","LC: N-Queens (Hard)","n-queens"),
      build("7h2","RAG: add metadata filtering"),
      llm("7h3","Retrieval quality debugging","https://www.pinecone.io/learn/retrieval-augmented-generation/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("7f1","LC: timed backtracking review","combination-sum"),
      build("7f2","RAG: add citations to responses","https://docs.anthropic.com/en/docs/build-with-claude/citations"),
      rev("7f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("7s1","Drill backtracking template","subsets"),
      build("7s2","Build: 'chat with docs' FastAPI endpoint"),
      ml("7s3","Karpathy Ep 5: Build GPT (start)","https://www.youtube.com/watch?v=kCc8FmEb1nY"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("7u1","Re-solve N-Queens + 2 mediums","n-queens"),
      ml("7u2","Karpathy Ep 5 (continue)","https://www.youtube.com/watch?v=kCc8FmEb1nY"),
      rev("7u3","Push all, plan Week 8"),
    ]},
  ]},

  { id:8, title:"Graphs BFS/DFS & Full RAG Pipeline", accent:"#A855F7", month:2, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("8m1","LC: Number of Islands (Medium)","number-of-islands"),
      lc("8m2","LC: Clone Graph (Medium)","clone-graph"),
      lc("8m3","LC: Max Area of Island (Medium)","max-area-of-island"),
      build("8m4","RAG project: ingest 20 PDFs/docs"),
      build("8m5","Add reranking + citations + streaming"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("8t1","LC: Pacific Atlantic Water (Medium)","pacific-atlantic-water-flow"),
      lc("8t2","LC: Surrounded Regions (Medium)","surrounded-regions"),
      build("8t3","RAG: build Streamlit UI","https://docs.streamlit.io/"),
      build("8t4","Deploy RAG app — portfolio piece #1"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("8w1","LC: Rotting Oranges (Medium)","rotting-oranges"),
      lc("8w2","LC: Course Schedule (Medium)","course-schedule"),
      lc("8w3","LC: Course Schedule II (Medium)","course-schedule-ii"),
      ml("8w4","Karpathy Ep 5 (finish)","https://www.youtube.com/watch?v=kCc8FmEb1nY"),
      build("8w5","Clean RAG project GitHub + README"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("8h1","LC: Walls and Gates (Medium)","walls-and-gates"),
      llm("8h2","Hallucination reduction techniques","https://www.getzep.com/ai-agents/reducing-llm-hallucinations/"),
      build("8h3","Add 'I don't know' handling to RAG"),
      rev("8h4","MONTH 2 REVIEW"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("8f1","LC: graph timed review","number-of-islands"),
      build("8f2","RAG: add confidence threshold"),
      rev("8f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("8s1","Drill BFS/DFS patterns","rotting-oranges"),
      build("8s2","Final RAG polish + deploy"),
      ml("8s3","fast.ai Lesson 5","https://course.fast.ai/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("8u1","Re-solve Course Schedule I & II","course-schedule"),
      ml("8u2","fast.ai Lesson 5 (finish)","https://course.fast.ai/"),
      rev("8u3","Push all, MONTH 2 COMPLETE"),
    ]},
  ]},

  // ============================================================
  // MONTH 3: RAG MASTERY + DP (W9-W13)
  // ============================================================

  { id:9, title:"Advanced Graphs & RAG Evals", accent:"#EF4444", month:3, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("9m1","LC: Graph Valid Tree (Medium)","graph-valid-tree"),
      lc("9m2","LC: Connected Components (Medium)","number-of-connected-components-in-an-undirected-graph"),
      lc("9m3","LC: Redundant Connection (Medium)","redundant-connection"),
      build("9m4","Set up Ragas for RAG eval","https://docs.ragas.io/"),
      build("9m5","Create 30 Q&A golden test set"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("9t1","LC: Word Ladder (Hard)","word-ladder"),
      lc("9t2","LC: Min Cost Connect Points (Med)","min-cost-to-connect-all-points"),
      build("9t3","Run RAG evals: faithfulness + relevancy"),
      build("9t4","Iterate: change chunk size, re-eval"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("9w1","LC: Alien Dictionary (Hard)","alien-dictionary"),
      build("9w2","LangChain RAG with sources","https://python.langchain.com/docs/how_to/qa_sources/"),
      build("9w3","Compare LlamaIndex vs LangChain RAG"),
      ml("9w4","HuggingFace embeddings guide","https://huggingface.co/blog/getting-started-with-embeddings"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("9h1","LC Review: graph patterns timed","graph-valid-tree"),
      build("9h2","Add HyDE to RAG for better retrieval","https://python.langchain.com/docs/how_to/"),
      llm("9h3","Query transformation techniques","https://python.langchain.com/docs/how_to/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("9f1","LC: timed graph review","word-ladder"),
      build("9f2","RAG eval report: document results"),
      rev("9f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("9s1","Drill Union Find pattern","redundant-connection"),
      build("9s2","Polish RAG eval pipeline"),
      ml("9s3","fast.ai Lesson 6","https://course.fast.ai/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("9u1","Re-solve Alien Dictionary","alien-dictionary"),
      ml("9u2","fast.ai Lesson 6 (finish)","https://course.fast.ai/"),
      rev("9u3","Push all, plan Week 10"),
    ]},
  ]},

  { id:10, title:"1D Dynamic Programming & Agents Intro", accent:"#F97316", month:3, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("10m1","LC: Climbing Stairs (Easy)","climbing-stairs"),
      lc("10m2","LC: Min Cost Climbing Stairs (Easy)","min-cost-climbing-stairs"),
      lc("10m3","LC: House Robber (Medium)","house-robber"),
      ml("10m4","Read: Anthropic Building Effective Agents","https://www.anthropic.com/research/building-effective-agents"),
      ml("10m5","Read: OpenAI Practical Guide to Agents","https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("10t1","LC: House Robber II (Medium)","house-robber-ii"),
      lc("10t2","LC: Longest Palindromic Substring (Med)","longest-palindromic-substring"),
      lc("10t3","LC: Palindromic Substrings (Medium)","palindromic-substrings"),
      build("10t4","Build: agent from scratch — no framework, 3 tools"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("10w1","LC: Decode Ways (Medium)","decode-ways"),
      lc("10w2","LC: Coin Change (Medium)","coin-change"),
      build("10w3","Agent: add max iterations + error handling"),
      build("10w4","Agent: add retry with backoff"),
      llm("10w5","Tool descriptions best practices","https://platform.openai.com/docs/guides/function-calling"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("10h1","LC: Maximum Product Subarray (Med)","maximum-product-subarray"),
      lc("10h2","LC: Word Break (Medium)","word-break"),
      build("10h3","Test agent: various queries, verify tool selection"),
      build("10h4","Push agent to GitHub — portfolio piece"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("10f1","LC: timed DP review — 2 problems","coin-change"),
      build("10f2","Agent: add logging for debugging"),
      rev("10f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("10s1","Drill DP: re-solve Coin Change + Word Break","word-break"),
      build("10s2","Compare: agent vs simple chain for same task"),
      ml("10s3","Karpathy Ep 6: GPT tokenizer","https://www.youtube.com/watch?v=zduSFxRajkE"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("10u1","DP weak spots: 2 problems","decode-ways"),
      ml("10u2","Karpathy Ep 6 (finish)","https://www.youtube.com/watch?v=zduSFxRajkE"),
      rev("10u3","Push all, plan Week 11"),
    ]},
  ]},

  { id:11, title:"2D DP & Build Agent from Scratch", accent:"#10B981", month:3, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("11m1","LC: Unique Paths (Medium)","unique-paths"),
      lc("11m2","LC: Longest Common Subsequence (Med)","longest-common-subsequence"),
      lc("11m3","LC: Buy/Sell Stock Cooldown (Med)","best-time-to-buy-and-sell-stock-with-cooldown"),
      build("11m4","LangGraph: Intro course (start)","https://academy.langchain.com/courses/intro-to-langgraph"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("11t1","LC: Coin Change II (Medium)","coin-change-ii"),
      lc("11t2","LC: Target Sum (Medium)","target-sum"),
      build("11t3","LangGraph: state management + nodes"),
      build("11t4","Build: multi-step workflow with LangGraph"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("11w1","LC: Interleaving String (Medium)","interleaving-string"),
      lc("11w2","LC: Longest Increasing Subseq (Med)","longest-increasing-subsequence"),
      lc("11w3","LC: Edit Distance (Hard)","edit-distance"),
      build("11w4","LangGraph: human-in-the-loop + checkpointing"),
      build("11w5","Build: content pipeline (extract → generate → score)"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("11h1","LC Review: 2D DP — 2 problems timed","unique-paths"),
      build("11h2","When NOT to use agents — decision framework"),
      ml("11h3","Simon Willison: Designing Agentic Loops","https://simonwillison.net/2025/Sep/30/designing-agentic-loops/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("11f1","LC: timed DP review","edit-distance"),
      build("11f2","Polish multi-step workflow"),
      rev("11f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("11s1","Drill 2D DP patterns","longest-common-subsequence"),
      build("11s2","Deploy workflow as FastAPI endpoint"),
      ml("11s3","Karpathy Ep 7: Build GPT-2","https://www.youtube.com/watch?v=l8pRSuU81PU"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("11u1","Re-solve Edit Distance + LIS","longest-increasing-subsequence"),
      ml("11u2","Karpathy Ep 7 (continue)","https://www.youtube.com/watch?v=l8pRSuU81PU"),
      rev("11u3","Push all, plan Week 12"),
    ]},
  ]},

  { id:12, title:"DP + Intervals & LangGraph Mastery", accent:"#A855F7", month:3, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("12m1","LC: Insert Interval (Medium)","insert-interval"),
      lc("12m2","LC: Merge Intervals (Medium)","merge-intervals"),
      lc("12m3","LC: Non-overlapping Intervals (Med)","non-overlapping-intervals"),
      build("12m4","LangGraph: multi-agent network","https://langchain-ai.github.io/langgraph/concepts/multi_agent/"),
      build("12m5","Build: supervisor + worker agents"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("12t1","LC: Meeting Rooms (Easy)","meeting-rooms"),
      lc("12t2","LC: Meeting Rooms II (Medium)","meeting-rooms-ii"),
      build("12t3","Agent: add error recovery + state persistence"),
      build("12t4","LangGraph error handling","https://langchain-ai.github.io/langgraph/how-tos/autofill-tool-errors/"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("12w1","LC: Distinct Subsequences (Hard)","distinct-subsequences"),
      lc("12w2","LC: Burst Balloons (Hard)","burst-balloons"),
      build("12w3","Set up DeepEval for your agent","https://deepeval.com/docs/getting-started"),
      build("12w4","Create eval test cases for agent"),
      build("12w5","Run evals: tool selection accuracy"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("12h1","LC Review: interval problems timed","merge-intervals"),
      build("12h2","Set up Promptfoo for prompt testing","https://github.com/promptfoo/promptfoo"),
      ml("12h3","Read: Hamel Husain — Your AI Needs Evals","https://hamel.dev/blog/posts/evals/"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("12f1","LC: timed review — 2 DP + 1 interval","burst-balloons"),
      build("12f2","Compare eval results: before/after changes"),
      rev("12f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("12s1","Drill DP hards","distinct-subsequences"),
      build("12s2","Polish agent + evals — portfolio piece"),
      ml("12s3","Karpathy Ep 7 (finish)","https://www.youtube.com/watch?v=l8pRSuU81PU"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("12u1","Re-solve 3 hardest DP problems","burst-balloons"),
      build("12u2","Push agent + eval results to GitHub"),
      rev("12u3","Push all, plan Week 13"),
    ]},
  ]},

  { id:13, title:"Greedy + Workflows & Month 3 Wrap", accent:"#EC4899", month:3, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("13m1","LC: Maximum Subarray (Medium)","maximum-subarray"),
      lc("13m2","LC: Jump Game (Medium)","jump-game"),
      lc("13m3","LC: Jump Game II (Medium)","jump-game-ii"),
      lc("13m4","LC: Gas Station (Medium)","gas-station"),
      build("13m5","Build: end-to-end content pipeline workflow"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("13t1","LC: Hand of Straights (Medium)","hand-of-straights"),
      lc("13t2","LC: Partition Labels (Medium)","partition-labels"),
      build("13t3","Workflow: parallel LLM calls + aggregation"),
      build("13t4","Workflow: routing — classify input → specialized handler"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("13w1","LC: Valid Parenthesis String (Med)","valid-parenthesis-string"),
      lc("13w2","LC: Rotate Image (Medium)","rotate-image"),
      lc("13w3","LC: Spiral Matrix (Medium)","spiral-matrix"),
      build("13w4","Set up LangSmith tracing","https://smith.langchain.com/"),
      build("13w5","Trace entire agent workflow — debug failures"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("13h1","LC: Set Matrix Zeroes (Medium)","set-matrix-zeroes"),
      build("13h2","Task success metrics for agent"),
      build("13h3","LLM-as-judge evaluation"),
      rev("13h4","MONTH 3 REVIEW"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("13f1","LC: timed greedy review","jump-game-ii"),
      build("13f2","Document all eval results"),
      rev("13f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("13s1","Drill greedy patterns","gas-station"),
      build("13s2","Polish all Month 3 projects"),
      ml("13s3","fast.ai Lesson 7","https://course.fast.ai/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("13u1","Re-solve 3 problems from weakest pattern","jump-game"),
      build("13u2","Push all code, update all READMEs"),
      rev("13u3","MONTH 3 COMPLETE — 3 portfolio pieces done"),
    ]},
  ]},

  // ============================================================
  // MONTH 4: DEPLOYMENT & PRODUCTION (W14-W17)
  // ============================================================

  { id:14, title:"Advanced Graphs & Docker", accent:"#EF4444", month:4, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("14m1","LC: Cheapest Flights K Stops (Med)","cheapest-flights-within-k-stops"),
      lc("14m2","LC: Network Delay Time (Medium)","network-delay-time"),
      build("14m3","Docker Getting Started","https://docs.docker.com/get-started/"),
      build("14m4","Write Dockerfile for your RAG app"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("14t1","LC: Swim in Rising Water (Hard)","swim-in-rising-water"),
      lc("14t2","LC: Reconstruct Itinerary (Hard)","reconstruct-itinerary"),
      build("14t3","Docker Compose: app + Chroma + Redis"),
      build("14t4","docker compose up → everything runs"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("14w1","LC Review: Dijkstra pattern practice","network-delay-time"),
      build("14w2","FastAPI production: Gunicorn + workers","https://fastapi.tiangolo.com/deployment/"),
      build("14w3","Add health check endpoint"),
      build("14w4","Add CORS middleware"),
      build("14w5","Deploy to cloud (Railway/Fly.io)"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("14h1","LC: timed graph hards","swim-in-rising-water"),
      build("14h2","Background jobs: Celery or FastAPI BackgroundTasks","https://fastapi.tiangolo.com/tutorial/background-tasks/"),
      build("14h3","Add async document processing"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("14f1","LC: review 2 mediums timed","cheapest-flights-within-k-stops"),
      build("14f2","Test deployment — verify it works end-to-end"),
      rev("14f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("14s1","Drill graph algorithms","reconstruct-itinerary"),
      build("14s2","Multi-stage Docker build — optimize image size"),
      ml("14s3","Read: Chip Huyen ML Systems Ch 1-2","https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("14u1","Re-solve 2 graph hards","swim-in-rising-water"),
      ml("14u2","Chip Huyen Ch 3-4"),
      rev("14u3","Push all, plan Week 15"),
    ]},
  ]},

  { id:15, title:"Hard LC Mix & Auth/Security", accent:"#F97316", month:4, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("15m1","LC: Median Two Sorted Arrays (Hard)","median-of-two-sorted-arrays"),
      lc("15m2","LC: Merge K Sorted Lists (Hard)","merge-k-sorted-lists"),
      build("15m3","FastAPI Security: JWT + API keys","https://fastapi.tiangolo.com/tutorial/security/"),
      build("15m4","Add auth to your deployed app"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("15t1","LC: Sliding Window Maximum (Hard)","sliding-window-maximum"),
      lc("15t2","LC: re-solve Trapping Rain Water","trapping-rain-water"),
      build("15t3","Rate limiting per user/API key"),
      llm("15t4","OWASP API Security Top 10","https://owasp.org/API-Security/"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("15w1","LC: re-solve Min Window Substring","minimum-window-substring"),
      build("15w2","Set up Langfuse observability","https://langfuse.com/docs/observability/overview"),
      build("15w3","Trace every LLM call: prompt, response, tokens, cost"),
      build("15w4","Set up structured logging (structlog)","https://www.structlog.org/"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("15h1","LC Review: 2 hards timed","merge-k-sorted-lists"),
      build("15h2","Prompt version management","https://langfuse.com/docs/prompts"),
      build("15h3","Build a cost monitoring dashboard"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("15f1","LC: hard review","sliding-window-maximum"),
      build("15f2","Set up spending alerts"),
      rev("15f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("15s1","Drill hard problems from all patterns","median-of-two-sorted-arrays"),
      build("15s2","Add Redis caching for LLM responses","https://redis.io/docs/"),
      build("15s3","Measure cache hit rate"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("15u1","Re-solve 3 hardest problems ever","merge-k-sorted-lists"),
      build("15u2","GPTCache: semantic caching","https://github.com/zilliztech/GPTCache"),
      rev("15u3","Push all, plan Week 16"),
    ]},
  ]},

  { id:16, title:"Design Problems & Observability", accent:"#10B981", month:4, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("16m1","LC: Design Twitter (Medium)","design-twitter"),
      lc("16m2","LC: Design Add/Search Words (Med)","design-add-and-search-words-data-structure"),
      build("16m3","LiteLLM: unified API + budget mgmt","https://github.com/BerriAI/litellm"),
      build("16m4","Set up model fallback strategy"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("16t1","LC: re-solve LRU Cache","lru-cache"),
      lc("16t2","LC: LFU Cache (Hard)","lfu-cache"),
      build("16t3","A/B test prompt variants in production"),
      build("16t4","Rollback strategy for bad prompts"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("16w1","LC: Design Parking System (Easy)","design-parking-system"),
      build("16w2","Helicone: proxy-based cost tracking","https://www.helicone.ai/"),
      build("16w3","Full production checklist: auth, rate limit, logging, monitoring"),
      build("16w4","Write architecture doc for your system"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("16h1","LC Review: design problems","design-twitter"),
      build("16h2","Load test your API — how does it handle 100 concurrent requests?"),
      build("16h3","Fix bottlenecks found in load test"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("16f1","LC: timed review — 2 mediums","lru-cache"),
      build("16f2","Final production deploy with all monitoring"),
      rev("16f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("16s1","Drill design patterns","lfu-cache"),
      build("16s2","Write up: production lessons learned"),
      ml("16s3","Study: ML system design patterns"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("16u1","Review all design problems","design-add-and-search-words-data-structure"),
      build("16u2","Push all code, update portfolio"),
      rev("16u3","Push all, plan Week 17"),
    ]},
  ]},

  { id:17, title:"System Design & Month 4 Wrap", accent:"#A855F7", month:4, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("17m1","LC: 3 medium problems — weak patterns","coin-change"),
      design("17m2","Study: Design a RAG system at scale"),
      design("17m3","Study: Design an LLM serving infra"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("17t1","LC: 2 timed mediums (explain aloud)","word-break"),
      design("17t2","Study: Design a chatbot platform"),
      design("17t3","Practice: whiteboard system design"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("17w1","LC: 2 hards from any pattern","edit-distance"),
      design("17w2","Study: caching, batching, model routing"),
      design("17w3","Study: cost optimization at scale"),
      ml("17w4","Read: Attention Is All You Need paper","https://arxiv.org/abs/1706.03762"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("17h1","LC: timed mock — 2 problems 45 min each","longest-increasing-subsequence"),
      design("17h2","Practice: record yourself explaining a system design"),
      rev("17h3","MONTH 4 REVIEW"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("17f1","LC: hard attempt","burst-balloons"),
      design("17f2","Write up: 3 system design solutions"),
      rev("17f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("17s1","Drill weakest 2 patterns","n-queens"),
      ml("17s2","Study: backpropagation + loss functions"),
      ml("17s3","Study: training vs inference, overfitting"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("17u1","Re-solve 3 problems from each month","3sum"),
      build("17u2","Portfolio review: 4+ deployed projects"),
      rev("17u3","MONTH 4 COMPLETE"),
    ]},
  ]},

  // ============================================================
  // MONTH 5: ML THEORY + PORTFOLIO (W18-W21)
  // ============================================================

  { id:18, title:"ML Theory Deep Dive", accent:"#3B82F6", month:5, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("18m1","LC: 3 mediums — maintain skills","house-robber"),
      ml("18m2","Study: transformers + self-attention mechanism"),
      ml("18m3","Implement self-attention in numpy"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("18t1","LC: 2 timed mediums","combination-sum"),
      ml("18t2","Study: RLHF + Constitutional AI","https://www.anthropic.com/research"),
      ml("18t3","Study: fine-tuning vs prompting decision framework"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("18w1","LC: 1 hard attempt","binary-tree-maximum-path-sum"),
      ml("18w2","Study: tokenization deep dive (BPE, SentencePiece)"),
      ml("18w3","Study: quantization (GGUF, GPTQ, AWQ)"),
      ml("18w4","Try Ollama: run open-source model locally","https://ollama.ai/"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("18h1","LC: 2 mediums timed","permutations"),
      ml("18h2","HuggingFace Model Hub exploration","https://huggingface.co/models"),
      ml("18h3","Compare: open-source vs API model for your use case"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("18f1","LC: timed review","course-schedule-ii"),
      ml("18f2","Study: inference optimization basics","https://huggingface.co/docs/transformers/llm_optims"),
      rev("18f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("18s1","Drill weak patterns","edit-distance"),
      ml("18s2","Study: KV-cache, batching strategies"),
      ml("18s3","Read 2 recent Anthropic blog posts","https://www.anthropic.com/research"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("18u1","LC: 2 problems from any pattern","merge-intervals"),
      ml("18u2","Read 2 recent OpenAI blog posts","https://openai.com/research"),
      rev("18u3","Push all, plan Week 19"),
    ]},
  ]},

  { id:19, title:"System Design for ML", accent:"#3B82F6", month:5, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("19m1","LC: timed mock — 2 problems","koko-eating-bananas"),
      design("19m2","Design: RAG pipeline for 1M documents"),
      design("19m3","Design: multi-tenant LLM gateway"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("19t1","LC: 2 mediums timed","daily-temperatures"),
      design("19t2","Design: real-time AI chatbot at scale"),
      design("19t3","Design: document processing pipeline"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("19w1","LC: 1 hard + 1 medium","sliding-window-maximum"),
      design("19w2","Design: AI-powered search engine"),
      design("19w3","Design: agent orchestration platform"),
      ml("19w4","Study: embedding models comparison"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("19h1","LC: mock interview — explain aloud","merge-k-sorted-lists"),
      design("19h2","Practice: whiteboard all 5 designs from memory"),
      design("19h3","Write up design docs"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("19f1","LC: timed review","network-delay-time"),
      design("19f2","Get feedback on designs — post online or ask a friend"),
      rev("19f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("19s1","Drill 2 mediums + 1 hard","number-of-islands"),
      ml("19s2","Read: recent DeepMind publications","https://deepmind.google/research/publications/"),
      design("19s3","Refine best 3 system designs"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("19u1","LC: 2 from weakest pattern","burst-balloons"),
      build("19u2","Start Portfolio Project #1 planning"),
      rev("19u3","Push all, plan Week 20"),
    ]},
  ]},

  { id:20, title:"Portfolio Project #1: RAG App", accent:"#10B981", month:5, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("20m1","LC: 2 hards — timed","binary-tree-maximum-path-sum"),
      build("20m2","Project #1: design architecture"),
      build("20m3","Project #1: set up repo + Docker"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("20t1","LC: 2 mediums timed","clone-graph"),
      build("20t2","Project #1: implement RAG pipeline"),
      build("20t3","Project #1: add evals"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("20w1","LC: 1 hard attempt","word-search-ii"),
      build("20w2","Project #1: build UI (Streamlit/Gradio)"),
      build("20w3","Project #1: add auth + monitoring"),
      build("20w4","Project #1: deploy with Docker"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("20h1","LC: 2 mediums","subsets"),
      build("20h2","Project #1: write comprehensive README"),
      build("20h3","Project #1: record demo video/GIF"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("20f1","LC: timed mock","gas-station"),
      build("20f2","Project #1: final polish + deploy"),
      rev("20f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("20s1","Drill 3 problems from weak patterns","longest-increasing-subsequence"),
      build("20s2","Project #1: write blog post about it"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("20u1","LC: 2 problems","generate-parentheses"),
      build("20u2","Project #1 SHIPPED — push final version"),
      rev("20u3","Plan Week 21"),
    ]},
  ]},

  { id:21, title:"Portfolio Project #2: AI Agent", accent:"#A855F7", month:5, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("21m1","LC: 2 hards — timed","lfu-cache"),
      build("21m2","Project #2: design agent architecture"),
      build("21m3","Project #2: implement core agent loop"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("21t1","LC: 2 mediums timed","pacific-atlantic-water-flow"),
      build("21t2","Project #2: add tools + state management"),
      build("21t3","Project #2: add evals"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("21w1","LC: 1 hard attempt","alien-dictionary"),
      build("21w2","Project #2: add monitoring + error handling"),
      build("21w3","Project #2: deploy with Docker + logging"),
      build("21w4","Project #2: write README + architecture diagram"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("21h1","LC: mock interview — 2 problems","swim-in-rising-water"),
      build("21h2","Project #2: final polish"),
      rev("21h3","MONTH 5 REVIEW"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("21f1","LC: timed review","reconstruct-itinerary"),
      build("21f2","Project #2 SHIPPED"),
      rev("21f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("21s1","Drill 3 hards","median-of-two-sorted-arrays"),
      build("21s2","Update portfolio: 2 shipped projects"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("21u1","Full mock: 3 problems in 2 hours","3sum"),
      build("21u2","GitHub profile cleanup + README"),
      rev("21u3","MONTH 5 COMPLETE — 2 portfolio pieces shipped"),
    ]},
  ]},

  // ============================================================
  // MONTH 6: INTERVIEW SPRINT (W22-W26)
  // ============================================================

  { id:22, title:"Company Research & Applications", accent:"#22D3EE", month:6, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("22m1","LC: daily hard","serialize-and-deserialize-binary-tree"),
      ml("22m2","Read 3 Anthropic research papers","https://www.anthropic.com/research"),
      ml("22m3","Read: Constitutional AI paper"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("22t1","LC: daily hard","word-ladder"),
      ml("22t2","Read 3 OpenAI research posts","https://openai.com/research"),
      ml("22t3","Read: RLHF + alignment research"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("22w1","LC: daily hard","n-queens"),
      ml("22w2","Read 3 DeepMind publications","https://deepmind.google/research/publications/"),
      setup("22w3","Tailor resume for each company"),
      setup("22w4","Submit applications"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("22h1","LC: daily hard","burst-balloons"),
      mock("22h2","Prepare: 'Why this company?' for each target"),
      mock("22h3","Prepare: 3 project deep-dive stories"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("22f1","LC: review weak patterns","edit-distance"),
      setup("22f2","LinkedIn + portfolio polish"),
      rev("22f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("22s1","LC: 2 hards timed","find-median-from-data-stream"),
      mock("22s2","Practice behavioral answers (STAR method)"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("22u1","LC: 2 hards","minimum-window-substring"),
      mock("22u2","Record yourself answering behavioral questions"),
      rev("22u3","Plan Week 23"),
    ]},
  ]},

  { id:23, title:"Mock Coding Interviews", accent:"#22D3EE", month:6, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("23m1","LC: 2 hards timed (45 min each)","merge-k-sorted-lists"),
      mock("23m2","Mock coding interview #1","https://www.pramp.com/"),
      mock("23m3","Review + analyze mistakes"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("23t1","LC: 2 hards timed","sliding-window-maximum"),
      mock("23t2","Mock coding interview #2","https://www.pramp.com/"),
      mock("23t3","Review + identify weak spots"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("23w1","LC: review all weak patterns — 3 problems","word-break"),
      mock("23w2","Mock coding interview #3","https://interviewing.io/"),
      mock("23w3","Practice: explain solutions out loud"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("23h1","LC: 2 hards — patterns you failed in mocks","coin-change"),
      mock("23h2","Drill the exact patterns you failed"),
      mock("23h3","Re-do mock problems cold"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("23f1","LC: final hard drill","trapping-rain-water"),
      mock("23f2","Mock #4 — full simulation","https://www.pramp.com/"),
      rev("23f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("23s1","LC: 3 hards from top patterns","binary-tree-maximum-path-sum"),
      mock("23s2","Review all mock feedback"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("23u1","LC: solve 5 problems cold — final drill","lru-cache"),
      mock("23u2","Prep for ML/design mocks next week"),
      rev("23u3","Plan Week 24"),
    ]},
  ]},

  { id:24, title:"Mock ML & System Design", accent:"#22D3EE", month:6, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("24m1","LC: 2 timed problems","longest-common-subsequence"),
      mock("24m2","Mock ML interview: explain transformers, attention, RLHF"),
      mock("24m3","Mock: explain your RAG project architecture"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("24t1","LC: 2 timed problems","course-schedule-ii"),
      mock("24t2","Mock system design: 'Design RAG for 1M docs'"),
      mock("24t3","Mock system design: 'Design LLM gateway'"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("24w1","LC: 1 hard timed","distinct-subsequences"),
      mock("24w2","Mock: explain your agent project end-to-end"),
      mock("24w3","Mock behavioral: leadership, conflict, failure stories"),
      mock("24w4","Prepare questions to ask YOUR interviewers"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("24h1","LC: 2 mediums — stay sharp","number-of-islands"),
      mock("24h2","Full mock interview day: coding + ML + behavioral"),
      mock("24h3","Review all feedback, fill gaps"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("24f1","LC: light maintenance","climbing-stairs"),
      mock("24f2","Final portfolio check — all projects work?"),
      rev("24f3","WEEKLY RETRO"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("24s1","LC: 2 problems stay sharp","validate-binary-search-tree"),
      mock("24s2","Re-read all system design write-ups"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("24u1","LC: confidence problems — solve 5 favorites","two-sum"),
      mock("24u2","Mental prep + rest before final 2 weeks"),
      rev("24u3","Plan Week 25"),
    ]},
  ]},

  { id:25, title:"Final Polish", accent:"#EC4899", month:6, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("25m1","LC: 1 hard (keep edge sharp)","word-search-ii"),
      build("25m2","Final portfolio review: all projects deployed?"),
      build("25m3","All GitHub READMEs polished?"),
      setup("25m4","Resume: final version for each company"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("25t1","LC: 2 mediums","group-anagrams"),
      setup("25t2","LinkedIn profile optimized"),
      setup("25t3","Follow-up on all applications"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("25w1","LC: 1 hard","merge-k-sorted-lists"),
      mock("25w2","Final mock: full loop coding + ML + behavioral"),
      mock("25w3","Review everything one last time"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("25h1","LC: light — 2 easy/medium favorites","binary-search"),
      mock("25h2","Practice: 60-second project pitches"),
      mock("25h3","Practice: 'tell me about yourself' — 90 seconds"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("25f1","LC: confidence round","reverse-linked-list"),
      rev("25f2","WEEKLY RETRO — almost there"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      lc("25s1","LC: light maintenance","container-with-most-water"),
      mock("25s2","Final review: top 10 hardest problems"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      lc("25u1","LC: 3 favorites — end on a high","3sum"),
      rev("25u2","Rest. You're ready."),
    ]},
  ]},

  { id:26, title:"GO TIME 🚀", accent:"#10B981", month:6, days:[
    { day:"Mon", tag:"NO DRIVE", tasks:[
      lc("26m1","LC: 1 problem to stay warm","two-sum"),
      mock("26m2","Interview prep for this week's calls"),
      mock("26m3","Review company-specific notes"),
    ]},
    { day:"Tue", tag:"DRIVE 5-9", tasks:[
      lc("26t1","LC: 1 problem","valid-anagram"),
      mock("26t2","Interviews or applications"),
    ]},
    { day:"Wed", tag:"NO DRIVE", tasks:[
      lc("26w1","LC: 1 problem","coin-change"),
      mock("26w2","Interviews or applications"),
      mock("26w3","Debrief after each interview"),
    ]},
    { day:"Thu", tag:"DRIVE 5-9", tasks:[
      lc("26h1","LC: 1 problem","number-of-islands"),
      mock("26h2","Follow up on interviews"),
    ]},
    { day:"Fri", tag:"DRIVE 4-9", tasks:[
      lc("26f1","LC: 1 problem","longest-substring-without-repeating-characters"),
      rev("26f2","Week review — how did interviews go?"),
    ]},
    { day:"Sat", tag:"DRIVE 12-8", tasks:[
      mock("26s1","Continue interviewing / applying"),
      rev("26s2","Reflect on 6 months of growth"),
    ]},
    { day:"Sun", tag:"DRIVE 12-8", tasks:[
      rev("26u1","🎯 1,000 HOURS COMPLETE. You did it."),
      rev("26u2","Whatever happens — you built real skills. Keep going."),
    ]},
  ]},
];

export const ROUTINE = {
  Mon:[{t:"7:30",l:"Wake · Breakfast",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode (2.5h)",c:"#EF4444"},{t:"12:00",l:"ML/LLM Theory (1.25h)",c:"#3B82F6"},{t:"1:30",l:"Commute to class",c:"#52525B"},{t:"3:00",l:"Study (1h)",c:"#3B82F6"},{t:"5:00",l:"CLASS",c:"#FBBF24"},{t:"6:20",l:"Commute back",c:"#52525B"},{t:"8:00",l:"Dinner",c:"#333"},{t:"8:20",l:"DEEP BUILD (3h)",c:"#10B981"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"Light review",c:"#EF4444"},{t:"12:30",l:"Sleep",c:"#222"}],
  Tue:[{t:"7:30",l:"Wake · Breakfast",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode (2.25h)",c:"#EF4444"},{t:"11:45",l:"ML quick (30m)",c:"#3B82F6"},{t:"12:30",l:"CLASS",c:"#FBBF24"},{t:"1:50",l:"Commute back · Lunch",c:"#52525B"},{t:"3:00",l:"BUILD (1.75h)",c:"#10B981"},{t:"5:00",l:"DRIVE GrubHub (4h)",c:"#FB7185"},{t:"9:00",l:"Dinner",c:"#333"},{t:"9:20",l:"LLM + Build (2h)",c:"#A855F7"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"LC review",c:"#EF4444"},{t:"12:30",l:"Sleep",c:"#222"}],
  Wed:[{t:"7:30",l:"Wake · Breakfast",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode (2.5h)",c:"#EF4444"},{t:"12:00",l:"ML/LLM Theory (1.25h)",c:"#3B82F6"},{t:"1:30",l:"Commute to class",c:"#52525B"},{t:"3:00",l:"Study (1h)",c:"#3B82F6"},{t:"5:00",l:"CLASS",c:"#FBBF24"},{t:"6:20",l:"Commute back",c:"#52525B"},{t:"8:00",l:"Dinner",c:"#333"},{t:"8:20",l:"DEEP BUILD (3h)",c:"#10B981"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"Light review",c:"#EF4444"},{t:"12:30",l:"Sleep",c:"#222"}],
  Thu:[{t:"7:30",l:"Wake · Breakfast",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode (2.25h)",c:"#EF4444"},{t:"11:45",l:"ML quick (30m)",c:"#3B82F6"},{t:"12:30",l:"CLASS",c:"#FBBF24"},{t:"1:50",l:"Commute back · Lunch",c:"#52525B"},{t:"3:00",l:"BUILD (1.75h)",c:"#10B981"},{t:"5:00",l:"DRIVE GrubHub (4h)",c:"#FB7185"},{t:"9:00",l:"Dinner",c:"#333"},{t:"9:20",l:"LLM + Build (2h)",c:"#A855F7"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"LC review",c:"#EF4444"},{t:"12:30",l:"Sleep",c:"#222"}],
  Fri:[{t:"7:30",l:"Wake · Breakfast",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode (1.25h)",c:"#EF4444"},{t:"11:00",l:"CLASS (3h)",c:"#FBBF24"},{t:"2:00",l:"Lunch",c:"#333"},{t:"2:15",l:"Build + ML (1.5h)",c:"#10B981"},{t:"4:00",l:"DRIVE GrubHub (5h)",c:"#FB7185"},{t:"9:00",l:"Dinner",c:"#333"},{t:"9:20",l:"Retro + LLM (2h)",c:"#A855F7"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"Light reading",c:"#3B82F6"},{t:"12:30",l:"Sleep",c:"#222"}],
  Sat:[{t:"7:30",l:"Wake · Big breakfast",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode DEEP (2.25h)",c:"#EF4444"},{t:"12:00",l:"DRIVE GrubHub (8h)",c:"#FB7185"},{t:"8:00p",l:"Dinner",c:"#333"},{t:"8:20",l:"Build + LLM (3h)",c:"#10B981"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"Light review",c:"#EF4444"},{t:"12:30",l:"Sleep",c:"#222"}],
  Sun:[{t:"7:30",l:"Wake · Fuel up",c:"#333"},{t:"8:00",l:"GYM (1.5h)",c:"#F59E0B"},{t:"9:30",l:"LeetCode drill (2.25h)",c:"#EF4444"},{t:"12:00",l:"DRIVE GrubHub (8h)",c:"#FB7185"},{t:"8:00p",l:"Dinner",c:"#333"},{t:"8:20",l:"Plan + Build (3h)",c:"#10B981"},{t:"11:30",l:"WALK (30m)",c:"#06B6D4"},{t:"12:00",l:"Light reading",c:"#3B82F6"},{t:"12:30",l:"Sleep",c:"#222"}],
};
