<script setup>
import { ref } from 'vue'
import 'animate.css'

const events = ref([
  {
    date: '2022/11',
    title: 'ChatGPT Release',
    description: 'OpenAI released ChatGPT, revolutionizing global AI conversation and opening a new era of large language model applications.'
  },
  {
    date: '2023/02',
    title: 'New Bing Launch',
    description: 'Microsoft and OpenAI collaborated to launch the new Bing search engine, integrating GPT-4 technology.'
  },
  {
    date: '2023/03',
    title: 'GPT-4 Release',
    description: 'OpenAI released GPT-4, bringing multimodal capabilities and significant improvements in comprehension and creativity.'
  },
  {
    date: '2023/05',
    title: 'PaLM 2 Release',
    description: 'Google released PaLM 2 large language model, showing exceptional capabilities in medicine, programming, and other fields.'
  },
  {
    date: '2023/07',
    title: 'Llama 2 Open Source',
    description: 'Meta released Llama 2 as open source, promoting the democratization of AI development.'
  },
  {
    date: '2023/09',
    title: 'Claude 2 Release',
    description: 'Anthropic released Claude 2, excelling in long-text processing and mathematical capabilities.'
  },
  {
    date: '2023/11',
    title: 'GPTs Launch',
    description: 'OpenAI launched GPTs, enabling users to customize AI assistants without programming skills.'
  },
  {
    date: '2023/12',
    title: 'Gemini Release',
    description: 'Google released the Gemini multimodal AI model, surpassing GPT-4 in multiple benchmark tests.'
  },
  {
    date: '2024/01',
    title: 'Claude 3 Family Launch',
    description: 'Anthropic released the Claude 3 family of models (Haiku, Sonnet, and Opus), with significant improvements in capabilities and performance.'
  },
  {
    date: '2024/01',
    title: 'Mistral Large Release',
    description: 'Mistral AI released Mistral Large, a powerful open-source model challenging the capabilities of proprietary models.'
  },
  {
    date: '2024/02',
    title: 'Gemma Release',
    description: 'Google released Gemma, a family of lightweight open-source models designed for responsible AI development.'
  },
  {
    date: '2024/02',
    title: 'Sora Announcement',
    description: 'OpenAI unveiled Sora, a text-to-video model capable of generating highly realistic videos up to 60 seconds long.'
  },
  {
    date: '2024/03',
    title: 'GPT-4 Turbo Updates',
    description: 'OpenAI released GPT-4 Turbo with improved performance, reduced costs, and knowledge cutoff date extended to December 2023.'
  },
  {
    date: '2024/03',
    title: 'Devin AI Developer',
    description: 'Cognition Labs introduced Devin, the first AI software engineer capable of autonomously solving complex programming tasks.'
  },
  {
    date: '2024/03',
    title: 'Google Gemini 1.5',
    description: 'Google launched Gemini 1.5, featuring significantly improved performance and a million-token context window.'
  },
  {
    date: '2024/03',
    title: 'Nvidia Blackwell Launch',
    description: 'Nvidia announced its next-gen Blackwell AI architecture, promising 40x performance increase over previous generation.'
  },
  {
    date: '2024/03',
    title: 'Claude Web Search',
    description: 'Anthropic added real-time web search capabilities to Claude, enabling it to access current information.'
  },
  {
    date: '2024/03',
    title: 'Google Real-time Video',
    description: 'Google rolled out real-time video and screen analysis features for Gemini, enabling dynamic interaction with visual content.'
  },
  {
    date: '2024/04',
    title: 'Adobe AI Agents',
    description: 'Adobe launched AI agents capable of creating personalized websites and generating PowerPoint presentations from raw data.'
  },
  {
    date: '2024/05',
    title: 'BBB Bionode Launch',
    description: 'BBB unveiled Bionode, a revolutionary computing platform using lab-grown neurons for AI applications.'
  },
  {
    date: '2024/06',
    title: 'Hugging Face Blueprint',
    description: 'Hugging Face submitted an open-source AI blueprint to the White House, challenging Big Tech dominance.'
  },
  {
    date: '2024/07',
    title: 'Microsoft-Google AI Deal',
    description: 'Microsoft acquired Wiz for $32B, signaling major investment in AI-driven cloud security.'
  },
  {
    date: '2024/08',
    title: 'Perplexity AI Growth',
    description: 'Perplexity AI emerged as a major competitor to Google Search with advanced AI capabilities.'
  },
  {
    date: '2024/09',
    title: 'Apple Siri Overhaul',
    description: 'Apple restructured Siri leadership and development to focus on advanced AI integration.'
  },
  {
    date: '2024/10',
    title: 'Meta AI Translation',
    description: 'Meta achieved universal translation across all major languages with cultural context understanding.'
  },
  {
    date: '2024/11',
    title: 'Tesla FSD Breakthrough',
    description: 'Tesla achieved significant breakthroughs in Full Self-Driving with advanced AI perception.'
  },
  {
    date: '2024/12',
    title: 'Amazon AGI Progress',
    description: 'Amazon announced major progress in AGI research with novel cognitive architectures.'
  },
  {
    date: '2025/01',
    title: 'OpenAI GPT-5',
    description: 'OpenAI released GPT-5 with unprecedented reasoning capabilities and improved multimodal understanding.'
  },
  {
    date: '2025/02',
    title: 'Google Gemini 3.0',
    description: 'Google launched Gemini 3.0 with enhanced multimodal capabilities and near-human level reasoning.'
  },
  {
    date: '2025/03',
    title: 'Anthropic Claude 4',
    description: 'Anthropic released Claude 4 with breakthrough capabilities in scientific research and complex problem-solving.'
  }
])
</script>

<template>
  <div class="container">
    <h1 class="title animate__animated animate__fadeIn">AI Development Timeline</h1>
    <h2 class="subtitle animate__animated animate__fadeIn">Major Milestones 2022-2025</h2>
    
    <div class="timeline">
      <div v-for="(event, index) in events" 
           :key="index" 
           class="timeline-item animate__animated animate__fadeInUp"
           :style="{ animationDelay: `${index * 0.2}s` }">
        <div class="timeline-content">
          <div class="date">{{ event.date }}</div>
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import 'animate.css';

:root {
  --primary-color: #646cff;
  --secondary-color: #42b883;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  text-align: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: var(--secondary-color);
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.8;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--primary-color);
}

.timeline-item {
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.timeline-content {
  width: 45%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: auto;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
}

.date {
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.event-title {
  color: var(--secondary-color);
  margin: 0.5rem 0;
}

.description {
  line-height: 1.6;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }
  
  .timeline-content {
    width: 85%;
    margin-left: auto !important;
  }
}
</style>