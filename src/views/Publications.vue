<template>
  <div class="contact-page">
    <!--
        - #publications
      -->

    <article class="publications">
      <header>
        <h2 class="h2 article-title">Publications</h2>
      </header>

      <section class="publications-posts">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 py-4">
          <div>
            <a
              href="https://link.springer.com/article/10.1007/s10489-023-04940-7"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[0]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Journal</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="May 01, 2024">May 01, 2024</time>
              </div>

              <h3 class="text-lg py-2">
                Engineering Applications of Artificial Intelligence
              </h3>

              <p class="text-md">
                Attention-guided generator with dual discriminator GAN for
                real-time video anomaly detection
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://link.springer.com/article/10.1007/s10489-023-04940-7"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[1]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Journal</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="Dec 10, 2023">Dec 10, 2023</time>
              </div>

              <h3 class="text-lg py-2">
                Applied Intelligence
              </h3>

              <p class="text-md">
                Stemgan: spatio-temporal generative adversarial network for
                video anomaly detection
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0262885624000532"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[2]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Journal</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="Mar 23, 2023">Mar 23, 2023</time>
              </div>

              <h3 class="text-lg py-2">Image and Vision Computing</h3>

              <p class="text-md">
                CVAD-GAN: Constrained video anomaly detection via generative
                adversarial network
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://link.springer.com/article/10.1007/s11760-023-02750-5"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[3]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Journal</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="Feb 02, 2024">Feb 02, 2024</time>
              </div>

              <h3 class="text-lg py-2">Signal, Image and Video Processing</h3>

              <p class="text-md">
                VALD-GAN: video anomaly detection using latent discriminator
                augmented GAN
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://ieeexplore.ieee.org/document/10371992/"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[4]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Conference</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="Dec. 05, 2023">Dec. 05, 2023</time>
              </div>

              <h3 class="text-lg py-2">
                2023 IEEE Symposium Series on Computational Intelligence (SSCI)
              </h3>

              <p class="text-md">
                Video Anomaly Latent Training GAN (VALT GAN): Enhancing Anomaly
                Detection Through Latent Space Mining
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-031-58535-7_14"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[5]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Conference</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="Nov. 11, 2023">Nov. 11, 2023</time>
              </div>

              <h3 class="text-lg py-2">
                CVIP 2023: 8th International Conference on Computer Vision and
                Image Processing
              </h3>

              <p class="text-md">
                MAAD-GAN: Memory-Augmented Attention-based Discriminator GAN for
                Video Anomaly Detection
              </p>
            </div>
          </div>

          <div>
            <a
              href="#"
              target="_blank"
            >
              <figure class="h-40 md:h-50 overflow-hidden">
                <img
                  :src="require(`@/assets/${publications[6]}`)"
                  alt="Journals in 2024"
                  loading="lazy"
                />
              </figure>
            </a>

            <div class="py-2">
              <div class="flex flex-row justify-start items-center my-2">
                <p class="mx-1">Conference</p>
                <i class="mx-1 w-2 h-2 rounded-lg border-gray-400 border-2">
                </i>
                <time datetime="Nov. 11, 2024">Nov. 11, 2024</time>
              </div>

              <h3 class="text-lg py-2">
                CVIP 2024: 9th International Conference on Computer Vision and
                Image Processing
              </h3>

              <p class="text-md">
                CUNIT-GAN: Constraining Latent Space for Unsupervised
                Multi-Domain Image-to-Image Translation via Generative
                Adversarial Network
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import { publications } from '@/assets/skillsList'

export default {
  name: 'Publications',
  components: {},
  data() {
    return {
      publications: publications,
    }
  },
}
</script>

<style scoped>
.contact-page {
  text-align: center;
  padding: 20px;
  color: black;
}

/*-----------------------------------*\
  #publications
\*-----------------------------------*/

.publications-posts {
  margin-bottom: 10px;
}

.publications-posts-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

a {
  text-decoration: none;
}

.publications-post-item > a {
  position: relative;
  background: var(--border-gradient-onyx);
  height: 100%;
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;
}

.publications-post-item > a::before {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--eerie-black-1);
  z-index: -1;
}

.publications-banner-box {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
}

.publications-banner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.publications-post-item > a:hover .publications-banner-box img {
  transform: scale(1.1);
}

.publications-content {
  padding: 15px;
}

.publications-meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  margin-bottom: 10px;
}

.publications-meta :is(.publications-category, time) {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.publications-meta .dot {
  background: var(--light-gray-70);
  width: 4px;
  height: 4px;
  border-radius: 4px;
}

.publications-item-title {
  margin-bottom: 10px;
  line-height: 1.3;
  transition: var(--transition-1);
}

.publications-post-item > a:hover .publications-item-title {
  color: var(--orange-yellow-crayola);
}

.publications-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.icon-box ion-icon {
  --ionicon-stroke-width: 35px;
}

article.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.h2,
.h3,
.h4,
.h5 {
  color: var(--white-2);
  text-transform: capitalize;
}

.h2 {
  font-size: var(--fs-1);
}

.h3 {
  font-size: var(--fs-2);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 7px;
}

.article-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.has-scrollbar::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--onyx);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--orange-yellow-crayola);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-button {
  width: 20px;
}

.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  z-index: 1;
}

.content-card::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

/*-----------------------------------*\
  #MAIN
\*-----------------------------------*/

main {
  margin: 15px 12px;
  margin-bottom: 75px;
  min-width: 259px;
}
</style>